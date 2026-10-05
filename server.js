// RelocateTech - Native Zero-Dependency HTTP Server & API
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  countries,
  atsChecklist,
  interviewQuestions,
  relocationPackageChecklist,
  verifiedJobBoards,
  topSponsoringCompanies
} from './data/relocationData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8'
};

export const appHandler = (req, res) => {
  const urlObj = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = urlObj.pathname;

  // CORS headers for API accessibility
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // API: Health check
  if (pathname === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      status: 'ok',
      service: 'RelocateTech Navigator',
      uptime: process.uptime(),
      timestamp: new Date().toISOString()
    }));
    return;
  }

  // API: Full Data Bundle
  if (pathname === '/api/data') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      countries,
      atsChecklist,
      interviewQuestions,
      relocationPackageChecklist,
      verifiedJobBoards,
      topSponsoringCompanies
    }));
    return;
  }

  // API: Countries
  if (pathname === '/api/countries') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(countries));
    return;
  }

  // API: Top Sponsoring Companies
  if (pathname === '/api/companies') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(topSponsoringCompanies));
    return;
  }

  // Static File Serving
  let filePath;
  if (pathname === '/' || pathname === '/index.html') {
    filePath = path.join(__dirname, 'public', 'index.html');
  } else if (pathname.startsWith('/files/')) {
    filePath = path.join(__dirname, pathname);
  } else {
    filePath = path.join(__dirname, 'public', pathname);
  }

  // Security: prevent directory traversal
  const safeBase = __dirname;
  const resolvedPath = path.resolve(filePath);
  if (!resolvedPath.startsWith(safeBase)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(resolvedPath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback: if not found in public, try serving public/index.html for SPA routes
      const spaFallback = path.join(__dirname, 'public', 'index.html');
      fs.readFile(spaFallback, (fallbackErr, fallbackData) => {
        if (!fallbackErr) {
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end(fallbackData);
        } else {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('404 Not Found');
        }
      });
      return;
    }

    const ext = path.extname(resolvedPath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    const stream = fs.createReadStream(resolvedPath);
    stream.pipe(res);
  });
};

export const server = http.createServer(appHandler);

if (process.env.NODE_ENV !== 'test') {
  server.listen(PORT, HOST, () => {
    console.log(`\n🌍 RelocateTech Navigator is live at http://localhost:${PORT}`);
    console.log(`📡 API Endpoints:`);
    console.log(`   - http://localhost:${PORT}/api/data`);
    console.log(`   - http://localhost:${PORT}/api/countries`);
    console.log(`   - http://localhost:${PORT}/api/health\n`);
  });
}

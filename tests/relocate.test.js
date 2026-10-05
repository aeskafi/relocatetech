import test from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import { appHandler } from '../server.js';
import {
  countries,
  atsChecklist,
  interviewQuestions,
  relocationPackageChecklist,
  verifiedJobBoards,
  topSponsoringCompanies
} from '../data/relocationData.js';

let serverInstance;
let baseUrl;

test.before(async () => {
  serverInstance = http.createServer(appHandler);
  await new Promise((resolve) => {
    serverInstance.listen(0, '127.0.0.1', () => {
      const port = serverInstance.address().port;
      baseUrl = `http://127.0.0.1:${port}`;
      resolve();
    });
  });
});

test.after(async () => {
  await new Promise((resolve) => {
    serverInstance.close(resolve);
  });
});

test('GET /api/health returns ok status', async () => {
  const res = await fetch(`${baseUrl}/api/health`);
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.equal(data.status, 'ok');
  assert.equal(data.service, 'RelocateTech Navigator');
});

test('GET /api/data returns complete dataset including sponsors', async () => {
  const res = await fetch(`${baseUrl}/api/data`);
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.ok(Array.isArray(data.countries));
  assert.ok(data.countries.length >= 8);
  assert.ok(Array.isArray(data.atsChecklist));
  assert.ok(data.atsChecklist.length >= 10);
  assert.ok(Array.isArray(data.interviewQuestions));
  assert.ok(data.interviewQuestions.length >= 5);
  assert.ok(Array.isArray(data.relocationPackageChecklist));
  assert.ok(Array.isArray(data.verifiedJobBoards));
  assert.ok(Array.isArray(data.topSponsoringCompanies));
  assert.ok(data.topSponsoringCompanies.length >= 10);
});

test('GET /api/countries returns validated countries array', async () => {
  const res = await fetch(`${baseUrl}/api/countries`);
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.ok(Array.isArray(data));
  const nl = data.find(c => c.id === 'netherlands');
  assert.ok(nl, 'Netherlands should be present');
  assert.equal(nl.code, 'NL');
  assert.ok(nl.officialSponsorRegistry.startsWith('http'));
});

test('GET /api/companies returns verified sponsoring tech employers', async () => {
  const res = await fetch(`${baseUrl}/api/companies`);
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.ok(Array.isArray(data));
  assert.ok(data.length >= 10);
  const booking = data.find(c => c.name === 'Booking.com');
  assert.ok(booking, 'Booking.com must be in sponsoring companies');
  assert.ok(booking.careersUrl.startsWith('https://'));
  assert.ok(booking.relocationPerks.length > 10);
});

test('GET / serves the RelocateTech dashboard HTML with all tabs', async () => {
  const res = await fetch(`${baseUrl}/`);
  assert.equal(res.status, 200);
  assert.ok(res.headers.get('content-type').includes('text/html'));
  const html = await res.text();
  assert.ok(html.includes('RelocateTech'));
  assert.ok(html.includes('ATS Resume Readiness Audit'));
  assert.ok(html.includes('Relocation Net Salary Simulator'));
  assert.ok(html.includes('2-Minute Elevator Pitch Trainer'));
});

test('Data integrity: ATS checklist items have valid weight and fields', () => {
  for (const item of atsChecklist) {
    assert.ok(item.id, 'Checklist item must have an id');
    assert.ok(item.category, 'Checklist item must have a category');
    assert.ok(item.title, 'Checklist item must have a title');
    assert.ok(typeof item.weight === 'number' && item.weight > 0, 'Weight must be a positive number');
  }
});

test('Data integrity: Interview questions have complete response models', () => {
  for (const q of interviewQuestions) {
    assert.ok(q.id, 'Question must have id');
    assert.ok(q.category, 'Question must have category');
    assert.ok(q.question, 'Question must have prompt string');
    assert.ok(q.strategy, 'Question must have strategic game plan');
    assert.ok(q.modelAnswer, 'Question must have model answer');
    assert.ok(q.pitfalls, 'Question must have pitfalls to avoid');
  }
});

test('Data integrity: Sponsoring employers have valid data structure', () => {
  for (const comp of topSponsoringCompanies) {
    assert.ok(comp.name, 'Company must have a name');
    assert.ok(comp.hq, 'Company must have an HQ');
    assert.ok(comp.visaType, 'Company must have visaType');
    assert.ok(comp.relocationPerks, 'Company must specify relocation perks');
    assert.ok(comp.careersUrl.startsWith('https://'), 'Careers URL must be https');
  }
});

test('Static files routing serves files/ directory assets', async () => {
  const res = await fetch(`${baseUrl}/files/job_offer.jpg`);
  assert.equal(res.status, 200);
  assert.equal(res.headers.get('content-type'), 'image/jpeg');
});

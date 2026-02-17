import { readFileSync, existsSync } from 'node:fs';

const requiredPaths = [
  'apps/web/app/page.tsx',
  'apps/mobile/App.tsx',
  'services/api/src/server.ts',
  'packages/domain/src/index.ts',
  'docs/PRODUCT_REQUIREMENTS.md',
  'docs/ARCHITECTURE.md',
  'docs/ROADMAP.md'
];

const missing = requiredPaths.filter((p) => !existsSync(p));
if (missing.length) {
  console.error('Missing required files:', missing.join(', '));
  process.exit(1);
}

const apiSource = readFileSync('services/api/src/server.ts', 'utf8');
const requiredEndpoints = [
  '/api/auth/register',
  '/api/auth/login',
  '/api/homework/upload',
  '/api/homework/parse',
  '/api/games/:homeworkId',
  '/api/games/:gameId/answer',
  '/api/progress/user/:userId',
  '/api/leaderboard/:scope'
];

const missingEndpoints = requiredEndpoints.filter((endpoint) => !apiSource.includes(endpoint));
if (missingEndpoints.length) {
  console.error('Missing required endpoint declarations:', missingEndpoints.join(', '));
  process.exit(1);
}

console.log('Structure validation passed. Required apps/docs/endpoints are present.');

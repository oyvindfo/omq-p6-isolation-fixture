import test from 'node:test';
import { setTimeout } from 'node:timers/promises';
test('controlled pending candidate CI window', async () => {
  if ((process.env.GITHUB_REF ?? '').startsWith('refs/heads/orient-queue/')) await setTimeout(120000);
});

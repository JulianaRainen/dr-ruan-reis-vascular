import { spawn } from 'node:child_process';
import { rm } from 'node:fs/promises';

const exitCode = await new Promise((resolve, reject) => {
  const child = spawn(process.execPath, ['node_modules/vinext/dist/cli.js', 'build'], {
    env: { ...process.env, STATIC_EXPORT: '1' },
    stdio: 'inherit',
  });

  child.on('error', reject);
  child.on('exit', (code) => resolve(code ?? 1));
});

// Vinext finishes the export before a Windows-only libuv shutdown assertion
// returns this status. Keep other failures fatal.
const windowsShutdownAssertion = process.platform === 'win32' && exitCode === -1073740791;

if (exitCode !== 0 && !windowsShutdownAssertion) {
  process.exit(exitCode);
}

// This local, untracked preview must never be included in a hosting artifact.
await rm('dist/client/logo-premium-preview.png', { force: true });

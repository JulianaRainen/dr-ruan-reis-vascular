import { spawn } from 'node:child_process';
import { access, cp, rm } from 'node:fs/promises';
import { constants } from 'node:fs';

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

// Hostinger must receive one self-contained, static directory — never the
// mixed dist/ folder, which also contains the Worker runtime.
const staticOutput = 'dist/hostinger';
await rm(staticOutput, { recursive: true, force: true });
await cp('dist/client', staticOutput, { recursive: true });

// This local, untracked preview must never be included in a hosting artifact.
await rm(`${staticOutput}/logo-premium-preview.png`, { force: true });

// Fail the build if the static hosting artifact is incomplete.
for (const page of ['index.html', 'o-medico.html', 'tratamentos.html', 'r-veins.html']) {
  await access(`${staticOutput}/${page}`, constants.R_OK);
}

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const path = require('path');
const { spawn } = require('child_process');

const vitePath = path.resolve('./node_modules/vite/bin/vite.js');
const buildProcess = spawn('node', [vitePath, 'build'], {
  stdio: 'inherit',
  shell: true
});

buildProcess.on('exit', (code) => {
  process.exit(code);
});
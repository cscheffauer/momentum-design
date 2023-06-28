const esbuild = require('esbuild');
const { join } = require('path');

const iife = async () => {
  const projectPath = process.cwd();

  await esbuild.build({
    bundle: true,
    entryPoints: [`${join(projectPath, 'src', 'index.ts')}`],
    minify: true,
    sourcemap: true,
    outfile: `${join(projectPath, 'dist', 'browser', 'index.js')}`,
    // todo: define browser targets here:
    target: ['chrome114', 'firefox114'],
  });
};

iife();

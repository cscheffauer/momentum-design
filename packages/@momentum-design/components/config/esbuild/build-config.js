const { join } = require('path');
const { minifyHTMLLiteralsPlugin } = require('esbuild-plugin-minify-html-literals');

const projectPath = process.cwd();
const outPath = join('dist', 'browser', 'index.js');

const browsers = ['chrome114', 'firefox114'];

const buildConfig = {
  bundle: true,
  entryPoints: [`${join(projectPath, 'src', 'index.ts')}`],
  minify: true,
  sourcemap: true,
  outfile: `${join(projectPath, outPath)}`,
  // todo: define browser targets here:
  target: browsers,
  plugins: [
    minifyHTMLLiteralsPlugin(),
  ],
};

module.exports = {
  config: buildConfig,
  outPath,
};

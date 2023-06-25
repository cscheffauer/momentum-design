export default {
  /** Globs to analyze */
  globs: ['src/**/**/*.component.ts'],
  /** Globs to exclude */
  exclude: ['src/utils/mixins/**/*.ts', 'src/**/**/styles.ts', 'config/plop/**/*.ts', 'config/plop/*.ts'],
  /** Directory to output CEM to */
  outdir: 'data',
  /** Run in dev mode, provides extra logging */
  dev: false,
  /** Run in watch mode, runs on file changes */
  watch: true,
  /** Include third party custom elements manifests */
  dependencies: false,
  /** Output CEM path to `package.json`, defaults to true */
  packagejson: false,
  /** Enable special handling for litelement */
  litelement: true,
  /** Enable special handling for catalyst */
  catalyst: false,
  /** Enable special handling for fast */
  fast: false,
  /** Enable special handling for stencil */
  stencil: false,
  /** Provide custom plugins */
  plugins: [],
};

import esbuild from 'esbuild';

esbuild.build({
    entryPoints: ['ext-src/extension.ts'],
    outfile: 'dist/extension.cjs',
    format: 'cjs',
    platform: 'node',
    bundle: true,
    sourcemap: true,
    external: ['vscode'],
});
import { defineConfig } from 'rollup'
import del from 'rollup-plugin-delete'
import pkg from './package.json'
import ts from 'rollup-plugin-ts'

export default defineConfig({
  external: Object.keys(pkg.dependencies),
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  plugins: [
    del({ targets: 'dist/*' }),
    ts(),
  ],
})

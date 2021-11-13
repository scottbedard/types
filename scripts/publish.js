const exec = require('child_process').execSync
const fs = require('fs')
const path = require('path')
const pkg = require('../package.json')

const rootIndex = path.resolve(__dirname, '../index.ts')
const srcIndex = path.resolve(__dirname, '../src/index.ts')

async function cli() {
  const src = String(fs.readFileSync(srcIndex)).replace('x.y.z', pkg.version)

  fs.writeFileSync(srcIndex, src)

  fs.writeFileSync(rootIndex, `export * from './src/index'`)

  exec('npm publish')
}

if (require.main === module) {
  cli()
}

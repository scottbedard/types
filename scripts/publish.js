const exec = require('child_process').execSync

async function cli() {
  exec('npm publish')
}

if (require.main === module) {
  cli()
}

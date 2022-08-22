import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const getArgs = (args) => {
  const argv = yargs(hideBin(process.argv)).argv
  return { s: argv.s, h: argv.h }
}

export default getArgs

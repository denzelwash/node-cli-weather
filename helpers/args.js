import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const getArgs = (args) => {
  const argv = yargs(hideBin(process.argv)).argv
  return { c: argv.c, h: argv.h, t: argv.t }
}

export default getArgs

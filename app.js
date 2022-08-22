#!/usr/bin/env node
import getArgs from './helpers/args.js'
import { printError, printSuccess, printHelp } from './services/log.service.js'

const initCli = () => {
  const args = getArgs(process.argv)
  console.log(args)
  printError()
  printSuccess()
  printHelp()
}

initCli()

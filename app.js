#!/usr/bin/env node
import getArgs from './helpers/args.js'
import { saveKeyValue } from './services/storage.service.js'
import { printError, printSuccess, printHelp } from './services/log.service.js'

const initCli = () => {
  const args = getArgs(process.argv)
  console.log(args)
  if (args.h) {
  }
  if (args.s) {
  }
  if (args.t) {
    saveKeyValue('token', args.t)
  }
  // printError()
  // printSuccess()
  // printHelp()
}

initCli()

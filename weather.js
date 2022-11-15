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
    saveToken(args.t)
    return
  }
}

const saveToken = async (token) => {
  try {
    await saveKeyValue('token', token)
    printSuccess('Токен сохранен')
  } catch (e) {
    printError(e)
  }
}

initCli()

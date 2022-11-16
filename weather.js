#!/usr/bin/env node
import getArgs from './helpers/args.js'
import { saveKeyValue } from './services/storage.service.js'
import { printError, printSuccess, printHelp } from './services/log.service.js'

const initCli = () => {
  const args = getArgs(process.argv)
  if (args.h) {
    printHelp()
  }
  if (args.s) {
    saveKeyValue('city', args.s)
    printSuccess('Город сохранен')
  }
  if (args.t) {
    saveToken(args.t)
    return
  }
}

const saveToken = async (token) => {
  if (!token.length) {
    printError('Не передан токен')
  }
  try {
    await saveKeyValue('token', token)
    printSuccess('Токен сохранен')
  } catch (e) {
    printError(e)
  }
}

initCli()

#!/usr/bin/env node
import getArgs from './helpers/args.js'
import { saveKeyValue } from './services/storage.service.js'
import { getWeather } from './services/api.service.js'
import { printError, printSuccess, printHelp } from './services/log.service.js'

const initCli = async () => {
  const args = getArgs(process.argv)
  if (args.h) {
    printHelp()
  }
  if (args.c) {
    saveCity(args.c)
    printSuccess('Город сохранен')
  }
  if (args.t) {
    saveToken(args.t)
    return
  }
  getForecast()
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

const saveCity = async (city) => {
  if (!city.length) {
    printError('Не передан город')
  }
  try {
    await saveKeyValue('city', city)
    printSuccess('Город сохранен')
  } catch (e) {
    printError(e)
  }
}

const getForecast = async () => {
  try {
    const weatherData = await getWeather('moskwa')
    console.log(weatherData)
  } catch(e) {
    if (e?.response?.status === 404) {
      printError('Неверно указан город!')
    } else if (e?.response?.status === 401) {
      printError('Неверно указан токен!')
    } else {
      printError(e.message)
    }
  }
}

initCli()

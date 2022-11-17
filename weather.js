#!/usr/bin/env node
import getArgs from './helpers/args.js'
import { saveKeyValue, getKeyValue } from './services/storage.service.js'
import { getWeather, getIcon } from './services/api.service.js'
import {
  printError,
  printSuccess,
  printHelp,
  printWeather,
} from './services/log.service.js'

const initCli = async () => {
  const args = getArgs(process.argv)
  if (args.h) {
    return printHelp()
  }
  if (args.c) {
    return saveCity(args.c)
  }
  if (args.t) {
    return saveToken(args.t)
  }
  return getForecast()
}

const saveToken = async (token) => {
  if (!token.length) {
    return printError('Не передан токен')
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
    return printError('Не передан город')
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
    const city = process.env.city ?? (await getKeyValue('city'))
    const weatherData = await getWeather(city)
    printWeather(weatherData, getIcon(weatherData.weather[0].icon))
  } catch (e) {
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

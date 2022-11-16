import axios from 'axios'
import { getKeyValue } from './storage.service.js'

const getWeather = async (sity) => {
  try {
    const token = await getKeyValue('token')
    if (!token) {
      throw new Error(
        'Не задан ключ API, задайте его через команду -t [API_KEY]'
      )
    }
    const { data } = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          q: sity,
          appid: token,
          units: 'metric',
          lang: 'ru',
        },
      }
    )
    return data
  } catch (e) {
    console.log(e)
  }
}

export { getWeather }

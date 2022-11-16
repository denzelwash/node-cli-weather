import axios from 'axios'
import https from 'https'

const fetchData = async () => {
  // const response = await axios.get(
  //   `https://api.openweathermap.org/data/2.5/weather?q=Moskwa&appid=42ccbf7bd099e6ce8adf063d74271eb5&units=metric&lang=ru`
  // )
  // console.log(response)
  https
    .get(
      'https://api.openweathermap.org/data/2.5/weather?q=Moskwa&appid=42ccbf7bd099e6ce8adf063d74271eb5&units=metric&lang=ru',
      (res) => {
        console.log('statusCode:', res.statusCode)
        console.log('headers:', res.headers)

        res.on('data', (d) => {
          console.log(d.toString())
        })
      }
    )
    .on('error', (e) => {
      console.error(e)
    })
}

export { fetchData }

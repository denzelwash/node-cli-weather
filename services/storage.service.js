import os from 'os'
import path from 'path'
import fs from 'fs'

const filePath = path.join(os.homedir(), 'weather.json')

const saveKeyValue = async (key, value) => {
  let data = {}
  if (fs.existsSync(filePath)) {
    const tempData = await fs.promises.readFile(filePath)
    data = JSON.parse(tempData)
  }
  data[key] = value
  await fs.promises.writeFile(filePath, JSON.stringify(data))
}

const getKeyValue = async (key) => {
  if (fs.existsSync(filePath)) {
    const tempData = await fs.promises.readFile(filePath)
    const data = JSON.parse(tempData)
    return data[key]
  }
  return undefined
}

export { saveKeyValue, getKeyValue }

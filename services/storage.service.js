import os from 'os'
import path from 'path'
import fs from 'fs'

const filePath = path.join(os.homedir(), 'weather.js')

const saveKeyValue = (key, value) => {
  fs.writeFileSync(filePath, 'test')
}

export { saveKeyValue }

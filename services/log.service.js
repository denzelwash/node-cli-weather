import chalk from 'chalk'
import dedent from 'dedent'

const printSuccess = (message) => {
  console.log(chalk.bgGreen('SUCCESS') + ' ' + message)
}

const printError = (err) => {
  console.log(chalk.bgRed('ERROR') + ' ' + err)
}

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan(' HELP ')}
          Без параметров - вывод погоды
          -s [CITY] для установки города
          -h для вывода помощи
          -t [API_KEY] для сохранения токена
    `
  )
}

export { printError, printSuccess, printHelp }

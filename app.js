#!/usr/bin/env node

const initCli = () => {
  process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val)
  })
}

initCli()

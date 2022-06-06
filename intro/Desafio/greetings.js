const getFlags = require('./export')

console.log(`Olá ${getFlags('--name')}. ${getFlags('--greeting')}`)

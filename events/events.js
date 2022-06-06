/* const { EventEmitter } = require('events')

const ev = new EventEmitter()
 */
// Usamos o 'on' quando formos disparar o evento diversas vezes
/* ev.once('saySomething', message => {
    console.log('Eu ouvi você: ', message)
}) */

// Usamos o 'once' para dispararmos o evento uma única vez

/* ev.once('saySomething', message => {
    console.log('Eu ouvi você: ', message)
})

ev.emit('saySomething', 'Sidney')
ev.emit('saySomething', 'Mauro')
 */

// Herdando eventos do EventEmitter
const { inherits } = require('util')
const { EventEmitter } = require('events')

function Character(name) {
    this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin')
chapolin.on('help', () => console.log(`Eu! O ${chapolin.name} colorado!`))
console.log('OH! E agora, quem poderá me defender?')
chapolin.emit('help')

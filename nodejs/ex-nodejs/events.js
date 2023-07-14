const { EventEmitter } = require('events');
const ev = new EventEmitter();

// Ouvir os eventos
ev.on('test', () => {
  console.log('Eu ouvi você: ', message)
})

ev.emit('test', "Mateus") // Emitir eventos

// Executa apenas o primeiro evento
ev.once('test', () => {
  console.log('Eu ouvi você: ', message)
})
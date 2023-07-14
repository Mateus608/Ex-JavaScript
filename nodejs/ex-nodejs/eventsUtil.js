const { inherits } = require('util'); // Puxa a função inherits
const { EventEmitter } = require('events'); // Puxa a função EventEmitter

function Character(name) {
  this.name = name
}

// Herda(inherits) para o Character todas as opções do EventEmitter
inherits(Character, EventEmitter);

const chapolin = new Character('Chapolin');
chapolin.on('help', () => console.log(`Eu o ${chapolin.name} colorado!`));

console.log('Oh! E agora, quem poderá me defender?');
setTimeout(() => chapolin.emit('help'), 3000);
// exports - экспорт из текущего модуля
// global - экспорт в глобальную область видимости
// module.exports === exports === this

const DataBase = require('../db');
const log = require('../logger')(module); // module factory

DataBase.connect();

class User {
  constructor(name) {
    this.name = name;
  }

  hello(who) {
    log(`${DataBase.getPhrase('Hello')} ${who.name}`);
  }
}

/*
 Module {
   id: 'C:\\learn-node\\user\\index.js',
   exports: {},
   parent:
     Module {
       id: '.',
       exports: {},
       parent: null,
       filename: 'C:\\learn-node\\server.js',
       loaded: false,
       children: [ [Circular] ],
       paths: [ 'C:\\learn-node\\node_modules', 'C:\\node_modules' ]
     },
   filename: 'C:\\learn-node\\user\\index.js',
   loaded: false,
   children: [
     Module {
       id: 'C:\\learn-node\\user\\ru.json',
       exports: [Object],
       parent: [Circular],
       filename: 'C:\\learn-node\\user\\ru.json',
       loaded: true,
       children: [],
       paths: [Array]
     }
   ],
   paths:
   [ 'C:\\learn-node\\user\\node_modules',
   'C:\\learn-node\\node_modules',
   'C:\\node_modules' ]
 }

*/

exports.User = User;
// module.exports = User; -> by default
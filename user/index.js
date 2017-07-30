// exports - экспорт из текущего модуля
// global - экспорт в глобальную область видимости
const phrase = require('./ru');

class User {
  constructor(name) {
    this.name = name;
  }

  hello(who) {
    console.log(`${phrase.Hello} ${who.name}`);
  }
}

exports.User = User;
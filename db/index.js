let phrase = null;

class DataBase {
  static connect() {
    if (!phrase) phrase = require('./ru');
    else console.warn('DataBase is already connected!')
  }

  static getPhrase(name) {
    const searchPhrase = phrase[name];
    if (!searchPhrase) {
      throw new Error('Нет такой фразы: ', + name);
    }

    return searchPhrase;
  }
}

module.exports = DataBase;
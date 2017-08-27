/**
 ЗАДАЧА - научиться работать с потоками (streams)
 Написать HTTP-сервер для загрузки и получения файлов
 - Все файлы находятся в директории files
 - Структура файлов НЕ вложенная.

 - Виды запросов к серверу
   GET /file.ext
   - выдаёт файл file.ext из директории files,

   POST /file.ext
   - пишет всё тело запроса в файл files/file.ext и выдаёт ОК
   - если файл уже есть, то выдаёт ошибку 409
   - при превышении файлом размера 1MB выдаёт ошибку 413

   DELETE /file
   - удаляет файл
   - выводит 200 OK
   - если файла нет, то ошибка 404

 Вместо file может быть любое имя файла.
 Так как поддиректорий нет, то при наличии / или .. в пути сервер должен выдавать ошибку 400.

- Сервер должен корректно обрабатывать ошибки "файл не найден" и другие (ошибка чтения файла)
- index.html или curl для тестирования

 */

// Пример простого сервера в качестве основы

'use strict';

let url = require('url');
let fs = require('fs');
const {createServer} = require('http');

createServer((req, res) => {
  let pathname = decodeURI(url.parse(req.url).pathname);
  switch(req.method) {
  case 'GET':
    if (pathname == '/') {
      // отдачу файлов следует переделать "правильно", через потоки, с нормальной обработкой ошибок
      fs.readFile(__dirname + '/public/index.html', (err, content) => {
        if (err) throw err;
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        res.end(content);
      });
      return;
    } else {
      const urlChunks = pathname.split('/');

      if (urlChunks.length > 2) {
        res.statusCode = 400;
        res.end("Wrong request format");
      }

      const filename = urlChunks[1];

      if (!filename.match(/\.[a-zA-Z0-9]+$/)) {
        res.statusCode = 400;
        res.end("Wrong file format: [file].[ext]");
      }

      fs.readFile(__dirname + '/files/' + filename, (err, content) => {

      });
    }
    case 'POST':
      break;
    case 'DELETE':
      break;

  default:
    res.statusCode = 502;
    res.end("Not implemented");
  }

}).listen(3000);

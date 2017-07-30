/**
 * Created by Владислав on 30.07.2017.
 */
module.exports = function (nameModule) {
  return function() {
    const args = [nameModule.filename, ...[].slice.call(arguments)];
    console.log.apply(console, args);
  };
};
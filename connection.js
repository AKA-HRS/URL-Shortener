const mongooes = require("mongoose");

async function connectTOMongo(url) {
  return mongooes.connect(url);
}
module.exports = {connectTOMongo};

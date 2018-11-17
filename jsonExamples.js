const parse = (text) => {
  console.log("object= ", JSON.parse(text));
};

const stringify = (object) => {
  console.log("text= ", JSON.stringify(object));
};

module.exports = {
  parse,
  stringify,
};

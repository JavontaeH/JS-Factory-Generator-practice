const coloredReindeerBuilder = function () {
  const reindeer = [
    "Dasher",
    "Dancer",
    "Prancer",
    "Vixen",
    "Comet",
    "Cupid",
    "Donner",
    "Blitzen",
  ];
  const reindeerObjectArray = [];
  let coloredReindeer = colorGen();
  // loop that iterates over reindeer array and calls build reindeer to transform it into an object and uses color generator to assign the color property of that object.
  reindeer.forEach((element) => {
    let coloredReindeerColor = coloredReindeer.next().value;
    let coloredReindeerObject = buildReindeer(element, coloredReindeerColor);
    reindeerObjectArray.push(coloredReindeerObject);
  });

  return reindeerObjectArray;
};
// factory function that builds reindeer object
const buildReindeer = (name, color) => {
  const reindeerObject = {};
  reindeerObject.name = name;
  reindeerObject.color = color;
  return reindeerObject;
};
// color generator for reinder object's color property.
const colorGen = function* () {
  const colors = [
    "Blue",
    "Red",
    "Orange",
    "Purple",
    "Goldenrod",
    "Aquamarine",
    "Olive",
    "Azure",
    "Fuchsia",
    "Chocolate",
    "Salmon",
    "Amaranth",
  ];
  for (let i = 0; i < colors.length; i++) {
    let reindeerColor = colors[i];
    yield reindeerColor;
  }
};

let result = coloredReindeerBuilder();
console.log(result);

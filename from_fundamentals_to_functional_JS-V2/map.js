import { _ } from "./_.js";
const weapons = ["candlestick", "lead pipe", "revolver"];

const makeBroken = function (item) {
  return `broken ${item}`;
};

const brokenWeapons = _.map(weapons, makeBroken);
console.log(brokenWeapons);

function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(" ")[1],
    speak() {
      console.log(`my name is ${name}`);
    },
  };
}

const suspects = ["Miss Scarlet", "Colonel Mustard", "Mr. White"];

const suspectsList = _.map(suspects, CreateSuspectObjects);
console.table(suspectsList);

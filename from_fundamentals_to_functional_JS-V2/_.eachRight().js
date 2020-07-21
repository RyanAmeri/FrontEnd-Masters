import { _ } from "./_.js";

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

const suspectsList = [];

_.eachRight(suspects, function (name) {
  suspectsList.push(CreateSuspectObjects(name));
});

console.table(suspectsList);

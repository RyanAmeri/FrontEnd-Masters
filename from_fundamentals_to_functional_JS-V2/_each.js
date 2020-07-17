const _ = {
  each(list, callback) {
    if (Array.isArray(list)) {
      for (let [index, item] of list.entries()) {
        callback(item, index, list);
      }
    } else {
      for (let item in list) {
        if (list.hasOwnProperty(item)) {
          callback(list[item], item, list);
        }
      }
    }
  },
};

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

_.each(suspects, function (name) {
  suspectsList.push(CreateSuspectObjects(name));
});

console.table(suspectsList);

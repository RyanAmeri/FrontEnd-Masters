const _ = {
  each(list, callback) {
    if (Array.isArray(list)) {
      for (let item of list) {
        callback(item);
      }
    } else {
      for (let item in list) {
        if (list.hasOwnProperty(item)) {
          callback(item);
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

var suspects = ["Miss Scarlet", "Colonel Mustard", "Mr. White"];

var suspectsList = [];

_.each(suspects, function (name) {
  suspectsList.push(CreateSuspectObjects(name));
});

console.table(suspectsList);

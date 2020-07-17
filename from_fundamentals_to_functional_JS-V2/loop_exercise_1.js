const game = {
  suspects: [
    {
      name: "Rusty",
      color: "orange",
    },
    {
      name: "Miss Scarlet",
      color: "red",
    },
  ],
};

let mark;

for (let suspect of game.suspects) {
  if (suspect.name === "Rusty") {
    mark = suspect.name;
  }
}

console.log(mark);

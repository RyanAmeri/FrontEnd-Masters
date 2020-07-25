const _ = require("lodash");
const newDevelopment = [
  {
    name: "Miss Scarlet",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: true },
      { "dining room": true },
      { "billiard room": false },
      { library: true },
    ],
  },
  {
    name: "Reverend Green",
    present: true,
    rooms: [
      { kitchen: true },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": true },
      { library: false },
    ],
  },
  {
    name: "Colonel Mustard",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: true },
      { "dining room": false },
      { "billiard room": true },
      { library: false },
    ],
  },
  {
    name: "Professor Plum",
    present: true,
    rooms: [
      { kitchen: true },
      { ballroom: false },
      { conservatory: false },
      { "dining room": true },
      { "billiard room": false },
      { library: false },
    ],
  },
];

const rooms = _.reduce(
  newDevelopment,
  (store, suspect) => {
    store.push(suspect.rooms);
    return store;
  },
  []
);
const flatRooms = _.flatten(rooms);

const falseRooms = _.reduce(
  flatRooms,
  (accum, room) => {
    if (!Object.values(room)[0]) {
      accum.push(Object.keys(room)[0]);
    }
    return accum;
  },
  []
);

const falseRoomCounts = _.reduce(
  falseRooms,
  (accum, room) => {
    accum[room] === undefined
      ? (accum[room] = 1)
      : (accum[room] = accum[room] + 1);
    return accum;
  },
  {}
);

const noOne = [];
_.each(falseRoomCounts, (room, key) => {
  if (room === newDevelopment.length) noOne.push(key);
});

console.log(noOne);

export const _ = Object.create(null);

_.each = (list, callback) => {
  if (Array.isArray(list)) {
    for (let [index, item] of list.entries()) {
      callback(item, index, list);
    }
  } else {
    for (let item in list) {
      callback(list[item], item, list);
    }
  }
};

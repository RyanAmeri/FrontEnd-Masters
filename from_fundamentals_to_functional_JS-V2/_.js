export const _ = Object.create(null);

_.each = (list, callback) => {
  if (Array.isArray(list)) {
    for (let [index, item] of list.entries()) {
      callback(item, index, list);
    }
  } else {
    for (let key in list) {
      callback(list[key], key, list);
    }
  }
};
_.map = (list, callback) => {
  const res = [];
  if (Array.isArray(list)) {
    for (let [index, item] of list.entries()) {
      res.push(callback(item, index, list));
    }
  } else {
    for (let key in list) {
      res.push(list[key], key, list);
    }
  }
  return res;
};

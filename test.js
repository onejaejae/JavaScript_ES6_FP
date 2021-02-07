const o = { a: 1, b: 2, c: 3 };
const obj2Arr = (obj) => {
  const arr = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      arr.push([key, obj[key]]);
    }
  }
  return arr;
};
const oArr = obj2Arr(o);
oArr.forEach((v) => console.log(v));

// Array를 통해 알아보기
console.log("Arr -------------");
const arr = [1, 2, 3];
const iterator = arr[Symbol.iterator]();
iterator.next();
for (const a of iterator) console.log(a);

// Set을 통해 알아보기
console.log("Set -----------");
const set = new Set([1, 2, 3]);
const a = set[Symbol.iterator]();
for (const b of a) console.log(b);

// Map을 통해 알아보기
// https://medium.com/@hongkevin/js-5-es6-map-set-2a9ebf40f96b
console.log("Map -------------");
const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
let iter = map.keys();
console.log(iter.next());
for (const a of map.keys()) console.log(a);
for (const a of map.values()) console.log(a);
for (const a of map.entries()) console.log(a);

// 이터러블/이터레이터 프로토콜
// 이터러블: 이터레이터를 리턴하는 [Symbol.iterator]() 를 가진 값
// 이터레이터: {value, done} 객체를 리턴하는 next()를 가진 값
// 이터러블/이터레이터 프로토콜: 이터러블을 for...of, 전개 연산자 등과 함께 동작하도록한 규약

// 사용자 정의 이터러블을 통해 알아보기
const iterable = {
  [Symbol.iterator]() {
    let i = 3;
    return {
      next() {
        return i == 0 ? { done: true } : { value: i--, done: false };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};

const iter3 = iterable[Symbol.iterator]();
iter3.next();

for (const i of iter3) {
  console.log(i);
}

// 전개 연산자
console.clear();
const arr2 = [1, 2];
console.log(...arr2);

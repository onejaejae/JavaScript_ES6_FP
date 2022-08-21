// map
const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

const map = (f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
};

console.log(map((p) => p.name, products));

// 이터러블 프로토콜을 따른 map의 다형성
console.log([1, 2, 3].map((a) => a + 1));

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

console.log(map((a) => a * a, gen()));

let m = new Map();
m.set("a", 10);
m.set("b", 20);
console.log(new Map(map(([k, a]) => [k, a * 2], m)));

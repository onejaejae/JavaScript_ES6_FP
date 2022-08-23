// go, pipe
const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

const curry =
  (f) =>
  (a, ..._) =>
    _.length ? f(a, ..._) : (..._) => f(a, ..._);

const map = curry((f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
});

const filter = curry((f, iter) => {
  let res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
});

const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
});

const add = (a, b) => a + b;

const go = (...args) => reduce((a, f) => f(a), args);

const pipe =
  (f, ...fs) =>
  (...as) =>
    go(f(...as), ...fs);

go(
  add(0, 1),
  (a) => a + 1,
  (a) => a + 10,
  (a) => a + 100,
  console.log
);

const f = pipe(
  (a, b) => a + b,
  (a) => a + 1,
  (a) => a + 10,
  (a) => a + 100
);

console.log(f(1, 2));

// go를 사용하여 읽기 좋은 코드로 만들기
go(
  products,
  (products) => filter((p) => p.price < 20000, products),
  (products) => map((p) => p.price, products),
  (prices) => reduce(add, prices),
  console.log
);

// curry

const mult = curry((a, b) => a * b);
const mult3 = mult(2);
console.log(mult(1, 3));
console.log(mult3(2));

// go + curry
go(
  products,
  filter((p) => p.price < 20000),
  map((p) => p.price),
  reduce(add),
  console.log
);

// 함수 조합으로 함수 만들기
const tot_price = pipe(
  map((p) => p.price),
  reduce(add)
);

go(
  products,
  filter((p) => p.price < 20000),
  tot_price,
  console.log
);

go(
  products,
  filter((p) => p.price >= 20000),
  tot_price,
  console.log
);

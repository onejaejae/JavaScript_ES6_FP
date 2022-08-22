// reduce
const nums = [1, 2, 3, 4, 5];
const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
};

const add = (a, b) => a + b;
console.log(reduce(add, 0, [1, 2, 3, 4, 5]));
console.log(reduce(add, [1, 2, 3, 4, 5]));
console.log(
  reduce((total_price, product) => total_price + product.price, 0, products)
);

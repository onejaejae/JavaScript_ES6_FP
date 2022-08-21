// 이터러블/이터레이터 프로토콜
// 이터러블: 이터레이터를 리턴하는 [Symbol.iterator]() 를 가진 값
// 이터레이터: {value, done} 객체를 리턴하는 next()를 가진 값
// 이터러블/이터레이터 프로토콜: 이터러블을 for...of, 전개 연산자 등과 함께 동작하도록한 규약

// 제너레이터/이터레이터
// 제너레이터: 이터레이터이자 이터러블을 생성하는 함수

function* gen() {
  yield 1;
  yield 2;
  yield 3;
  return 10;
}

const iter = gen();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
for (const a of gen()) {
  console.log(a);
}
console.log(iter[Symbol.iterator]() == iter);

// odds
function* infinity(i = 0) {
  while (true) yield i++;
}

function* odd(l) {
  for (const a of infinity(1)) {
    if (a % 2) yield a;
    if (a == l) return;
  }
}

const iter2 = odd(10);
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());

const iter3 = infinity();

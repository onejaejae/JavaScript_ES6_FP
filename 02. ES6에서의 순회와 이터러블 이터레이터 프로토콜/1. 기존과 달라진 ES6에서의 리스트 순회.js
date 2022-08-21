// 기존과 달라진 ES6에서의 리스트 순회
// for i++
// for of

const list = [1, 2, 3];
for (var i = 0; i < list.length; i++) {
  console.log(list[i]);
}

const str = "abc";
for (var i = 0; i < str.length; i++) {
  console.log(str[i]);
}

for (const a of list) {
  console.log(a);
}

for (const a of str) {
  console.log(a);
}

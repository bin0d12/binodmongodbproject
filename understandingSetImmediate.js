// const baz = () => console.log('baz');
// const foo = () => console.log('foo');
// const zoo = () => console.log('zoo');
// const start = () => {
//   console.log('start');
//   setImmediate(baz);
//   new Promise((resolve, reject) => {
//     resolve('bar');
//   }).then((resolve) => {
//     console.log(resolve);
//     process.nextTick(zoo);
//   });
//   process.nextTick(foo);
// };
// start();

// // start foo bar zoo baz

let a = 10;
let b = 20;

function addTwoNumber(n1, n2) {
  console.log(n1 + n2);
}
setImmediate(() => {
  addTwoNumber(a, b);
});

console.log("inside event loop 1");

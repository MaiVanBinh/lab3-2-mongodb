function delay(t, v) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      console.log("Hello ");
      resolve();
    }, t);
  });
}

// const hello = () => {
//   console.log("hello ");
// };

// const waitAndSay = () => {
//   setTimeout(() => {
//     hello();
//   }, 1000);
// };

const sayHello = () => {
  delay().then((e) => console.log("binh"));
};

sayHello();

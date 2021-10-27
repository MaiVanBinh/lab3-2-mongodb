function delay(t, v) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      console.log("Hello ");
      resolve();
    }, t);
  });
}

const sayHello = async () => {
  await delay(1000);
  console.log("binh");
};

sayHello();

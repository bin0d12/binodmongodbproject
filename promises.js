function f1() {
  return new Promise(function (resolve, reject) {
    const data = true;
    if (!data) {
      console.log("this is success");
      resolve();
    } else {
      console.log("this is reject");
      reject("this is ana reject");
    }
  });
}
f1().then(function () {
    console.log("this is then fun");
  }).catch(function (error) {
    console.log("this is error" + " " + error);
  });

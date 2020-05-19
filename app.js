function name() {
  var fullname = "Dallin Humphrey";
  var lastname = "Parkes";

  function concat(name) {
    return "MR." + name;
  }

  return concat(fullname);
}

var obj = [{}];

// var car = {
//   make: "volvo",
//   speed: 160,
//   engine: {
//     size: 2.0,
//     make: "bmw",
//     fuel: "gas",
//     pistons: [{ maker: "BMW" }, { maker: "BMW2" }],
//   },
//   drive: function () {
//     return "dive";
//   },
// };

// var array = [
//   "string",
//   100,
//   ["embed", 200],
//   { car: "ford" },
//   function () {
//     return "drive";
//   },
// ];

// console.log(car.make);
// console.log(car.engine.make);
// console.log(car.engine.pistons[0].maker);
// console.log(car.engine.pistons[1].maker);
// console.log(array[2]);

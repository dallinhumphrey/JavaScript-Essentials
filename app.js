var engine = {
  maker: "Ford",
  headGasket: {
    pots: ["piston1", "piston2", "piston3", "piston4", "piston5", "piston6"],
  },
};

function runExpression() {
  var a = 10;
  var b = 90;

  function add() {
    return a + b;
  }

  return add();
}

// console.log(myName(), printName());

// function printName() {
//   return "John Doe";
// }
// function myName() {
//   return "Dallin";
// }

// function name(fullname) {
//   return fullname.firstname + fullname.lastname;
// }
// console.log(name({ firstname: "Dallin", lastname: " Humphrey" }));

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

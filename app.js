if (true) {
  var symbolName = "value reference in memory";

  let letSymbol = "scoped value";

  const symName = "constant value in memory";
}

for (let i = 0; i < 5; i++) {
  var symbolName = "value reference in memory";

  let letSymbol = "scoped value";

  const symName = "constant value in memory";
}

function check() {
  var symbolName = "value reference in memory";

  let letSymbol = "scoped value";

  const symName = "constant value in memory";
}

// var classRegister = ["Dallin", "Kort", "Glen", "Jarom"];

// for (var i = 0; i < classRegister.length; i++) {
//   console.log(classRegister[i]);
// }

// for (var i = 0 in classRegister) {
//   console.log(classRegister[i]);
// }

// var carsLeft = 1,
//   carsRight = 0,
//   greenMan = "yes";

// if (greenMan === "yes") {
//   console.log("cross the road");
// } else if (greenMan === "yes" && (carsLeft === 0 || carsRight === 0)) {
//   console.log("All clear! Cross the road");
// } else {
//   console.log("Stay Where you are!");
// }

// function Apple(color, weight) {
//   this.color = color;
//   this.weight = weight;
// }

// Apple.prototype = {
//   eat: function () {
//     return this;
//   },
//   throw: function () {
//     return "throw the apple";
//   },
// };

// var apple1 = new Apple("red", 99);
// var apple2 = new Apple("green", 109);
// var apple3 = new Apple("yellow", 299);

// var object = {
//   prop: this,
//   embed: {
//     embed: true,
//     method: function () {
//       return this;
//     },
//   },
// };

// var array = [
//   this,
//   function () {
//     return this;
//   },
// ];
// function global() {
//   console.log("from global", this);

//   function sub() {
//     consele.log("from sub", this);
//   }

//   sub();
// }

// global.call(object);

// new global();

// var engine = {
//   maker: "Ford",
//   headGasket: {
//     maker: "Golf",
//     pots: ["piston1", "piston2", "piston3", "piston4", "piston5", "piston6"],
//   },
// };

// function runExpression() {
//   var a = 10;

//   function add() {
//     const engine = "New String";
//   }

//   add();
// }

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

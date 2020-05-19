var car = {
  make: "volvo",
  speed: 160,
  engine: {
    size: 2.0,
    make: "bmw",
    fuel: "gas",
    pistons: [{ maker: "BMW" }, { maker: "BMW2" }],
  },
  drive: function () {
    return "dive";
  },
};

var array = [
  "string",
  100,
  ["embed", 200],
  { car: "ford" },
  function () {
    return "drive";
  },
];
console.log(car.make);

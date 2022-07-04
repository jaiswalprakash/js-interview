let computers = [
  {
    name: "apple",
    ram: 16,
  },
  {
    name: "dell",
    ram: 4,
  },
  { name: "lenovo", ram: 24 },
];

// 1. check is every computer have 15+ ram
//2. check atlist one computer have 15+ ram

let everyComputerHave = computers.every(function (computer) {
  return computer.ram > 15;
});
console.log("everyComputerHave", everyComputerHave);

let atlistOneHave = computers.some(function (computer) {
  return computer.ram > 15;
});
console.log("atlistOneHave", atlistOneHave);

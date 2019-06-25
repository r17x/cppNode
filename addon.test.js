const addon = require("./build/Release/addon");
console.log(
  "Tinkering: N-API (Native API) write code in C++ and run in Javascript"
);
console.log("This should be eight:", addon.add(3, 5));
console.log("Kill javascript with C++:", addon.fuckJS());

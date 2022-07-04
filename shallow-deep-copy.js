/* 



Method                                          Pros	                                         Cons

1. shallow copy with =	                        clear and direct, the default	            only shallow copies objects

2. JSON.stringify() and JSON.parse()	        deep copies nested objects	                doesn't copy functions

3. Object.assign()	                            copies the immediate members of 
                                                an object—including functions	            doesn't deep copy nested objects

4. the ... spread operator	                    simple syntax, the preferred 
                                                way to copy an object	                    doesn't deep copy nested objects
Lodash cloneDeep()	                            clones nested objects including functions	adds an external dependency to your project


*/

let obj1 = {
  name: "praksh",
  age: 12,
  address: {
    state: "karnataka",
    pin: 1111,
    city: { street: "qwe123" },
  },
  getaddress() {
    return `The address is ${this.address.state + this.address.pin}`;
  },
};
//let obj1=obj2
//let obj2 = { ...obj1 }; // doesn't deep copy nested objects

//let obj2 = JSON.parse(JSON.stringify(obj1)); //deep copies nested objects // doesn't copy functions
let obj2 = Object.assign(obj1); //doesn't deep copy nested objects
obj2.address.state = "kjaiswal";

console.log("1", obj1.getaddress());
console.log("2", obj2.getaddress());

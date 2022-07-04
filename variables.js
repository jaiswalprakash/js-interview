/*
##variable.
=>  variables are the name given to a memeory location.

#Declare a variable.
=>  To declare a variable we can use the reserved keyword "var".

#syntax

    var<name>;  Declaring a variable without assigning a value.
        console.log(name) O/p- undefined.

    var<name> =value ;  Declaring a variable  assigning a value.
        console.log(name) o/p-value.


#rule

    1.Name must start with a letter (a to z or A to Z), underscore( _ ), or dollar( $ ) sign.
    2.After first letter we can use digits (0 to 9), for example value1.
    3.JavaScript variables are case sensitive, for example x and X are different variables.

#ES6 Update.
=>  Two type of varibale are introduced "let" and "const".

#let
    let <name>;
    let <name> =value;
    -It has block scope.

*/
//Example
var name = "prakash";

{
  let name = "akash";
  console.log("name-inside", name); //  o/p= akash;
  /* Note:
        if we not declare let name variable in block
        output of console.log(name) will be 'prakash'
        as it will take from global scope.
    */
}

console.log("name-outside", name); //o/p =prakash;

/*
#const 

    const<name>=value;
    const<name>   // This will give error "SyntaxError: 
                                            Missing initializer in const declaration" 

    *   Variables defined with const cannot be Redeclared.

    *   Variables defined with const cannot be Reassigned.

    *   Variables defined with const have Block Scope.

    const PI = 3.141592653589793;
    PI = 3.14;      // This will give an error. "TypeError: Assignment to constant variable"
    PI = PI + 10;   // This will also give an error."TypeError: Assignment to constant variable"


# const behavior with array and object;
    # with array
        const primeNumbers = [1, 2, 3, 5, 7];
        primeNumbers=[] // error
        primeNumbers.push(11); // o/p-[1,2,3,5,7,11];
    
        If you want to make objects and arrays immutable, use Object.freeze()
        Object.freeze(primeNumbers);

        primeNumbers.push(13); // error:TypeError: Cannot add property 3, 
                                                    object is not extensible.
    # with object
        const obj = {
            name:"praksh"
        };
        obj={} // error  TypeError: Assignment to constant variable
        obj.name='akash'; // o/p-{name:'akash'};
    
        If you want to make objects and arrays immutable, use Object.freeze()
        Object.freeze(obj);

        obj.name='prakash'; // error:TypeError:object is not extensible.

        var bulding = ["b1", "b2", "b3"];
        Object.freeze(bulding);
*/

// const name = "prakash";

// name = "jaiswal";

/*----------------let and var be with loop-------------------*/

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// 1,2,3  because they have three different memory reference

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
//   console.log("hello all");
// }
// 3,3,3 because they have same reference

function x() {
  for (let i = 0; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
//0,1,2,3,4,5
function x() {
  for (var i = 0; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
//6, 6, 6, 6, 6, 6;

x();

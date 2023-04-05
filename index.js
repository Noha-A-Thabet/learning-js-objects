let mee = {
     name: "Noha",
     favoriteFood: "Pizza",
     hairColor: "black",
     eyeColor: "brown"
}

mee.name = "dina";
console.log(mee)
// ******************************************
let car = {
     make: 'Volkswagen',
     model: 'Golf',
     modelYear: 2005,
};

if (car.modelYear > 2000) {
     console.log("the car is modern")
} else {
     console.log("this car is old")
}
// ******************************************

/**
 * Now create another object called friend with the same properties as me.

Introduce your friend using the same function you created in part 1.
 */


let friend = {
     name: "dina",
     favoriteFood: "fries",
     hairColor: "Brown",
     eyeColor: "brown",
}
function introducePerson(friend) {
     return "Hello my name is " + friend.name + " and my favorite food is " + friend.favoriteFood;
}

let friendInfo = introducePerson(friend);
console.log(friendInfo)

// **************************************

/**
 * Create a function that takes two "person" objects.
 *  Compare their ages, then use console.log to print who is older of the two.
You may need to first add an "age" property to your objects if you don't have it already.
 */

let personOne = {
     name: "dina",
     age: 24,
}

let personTwo = {
     name: "doaa",
     age: 23
}

function whoIsOlder(personOne, personTwo) {
     if (personOne.age > personTwo.age) {
          return "Dina Is Older Than Doaa"
     } else {
          return "Doaa Is Older Than Dina"
     }
}

let theOlder = whoIsOlder(personOne, personTwo);
console.log(theOlder)

// ****************************
let me = {
     name: "Harald",
     dayOfWeek: "monday",
     greeting: function () {
          if (me.dayOfWeek === "Monday") {
               return "Get out of my face";
          } else {
               return "Hi, how are you?";
          }
     }
};

console.log(me.greeting())

//***************************************** */
/**
 * Using your "info" object, create a method to introduce yourself (using console.log). 
 * Create a object within that represents your address.
 */

let myInfo = {
     name: "Noha",
     address: {
          city: "giza",
          country: "egypt"
     },
     introduce: function () {
          return "Hi i'm " + myInfo.name + " Live in city  " + myInfo.address.city + " From country " + myInfo.address.country
     }
}

console.log(myInfo.introduce())

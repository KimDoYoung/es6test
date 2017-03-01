# ECMAScript6 정리

npm install --save-dev babel-loader

## 요점
1. let
2. const
3. template Strings
```javascript
  function print(firstName){
    console.log("Hello " +firstName);
    console.log(`Hello ${firstName}`);
  }
  print("John");
  function createEmail(firstName, purchasePrice){
    var shipping = 5.95;
    console.log(`
      Hi ${firstName}, Thanks for buying from us!
      Total : $${purchasePrice}
      Shipping : $${shipping}
      Grand Total : $${purchasePrice + shipping}
    `);
  }
  createEmail("Gina", 100);
 ```
4. Spread Operatior
  ```javascript
    var cats = ["Tabby", "Siamese", "Persian"];
    var dogs = ["Golden Retriever", "Pug", "Schnauzer"];

    var animals = ["Whale", "Giraffe", ...cats, "Snake", ...dogs, "Coyote"];
    console.log(animals);
  ```
5. Default Parameters
  ```javascript
    function add(x = 5, y = 7) {
      console.log(x + y);
    }
    add();
  ```
6. Object Literal Enhancement
```javascript
  var cat = {
    meow : function (times) {
        console.log(Array(times).join("meow"));
    },
    purr(times){
        console.log("purr".repeat(times));
    }
  };
  cat.meow(3);
  cat.purr(4);
  cat.snore(5);
```
7. Arrow Functions
```javascript
   var studentList = function(students){
     console.log(students);
   }
   var studentList = students => console.log(students);
   studentList(["Joe", "Cindy", "Jeanne"]);
```
8. Arrow Functions and 'this'
```javascript
  var person = {
      first : "Doug",
      actions : ["bike", "hike", "ski", "surf"],
      printActions : function(){
        var _this = this;
        this.actions.forEach(function(action) {
          var str = _this.first + " likes to " + action;
          console.log(str);
        });
      }
  };
  var person = {
      first : "Doug",
      actions : ["bike", "hike", "ski", "surf"],
      printActions(){
        this.actions.forEach(action => {
          var str = this.first + " likes to " + action;
          console.log(str);
        });
      }
  };
```

9. Destructuring Assignment
```javascript
 var sandwich = {
   title : "Reuben",
   price : 7,
   description : "Cleveland's favorite sandwich",
   ingredients : ['bread', 'corned beef', 'dressing', 'sauerkraut', 'cheese']
 };
 console.log(sandwich.title);
 console.log(sandwich.price);
 var {title, price} = {
   title : "Reuben",
   price : 7,
   description : "Cleveland's favorite sandwich",
   ingredients : ['bread', 'corned beef', 'dressing', 'sauerkraut', 'cheese']
 }
 console.log(title);
 console.log(price);

 var vacation = {
   destination : "Chile",
   travelers : 2,
   activity   : "skiing",
   cost : 4000,
 }
 function vacationMarketing({destination, activity}){
   return `Come to ${destination} and do some ${activity}`
 }
 console.log(vacationMarketing(vacation))
 ```
 10. Generator
 babel의 browser-polyfill.js 추가
```javascript
  function* eachItem(arr) {
    for(var i=0; i<arr.length; i++){
      yield arr[i];
    }
  }
  var letters = eachItem(["a", "b", "c", "d", "e", "f", "g"]);
  var abcs = setInterval(function(){
    var letter = letters.next();
    if(letter.done){
      clearInterval(abcs);
      console.log("Now i know my abcs");
    } else {
      console.log(letter.value)
    }
  }, 500);
```
11. Classes
```javascript
  class Vehicle {
    constructor(description, wheels){
      this.description = description;
      this.wheels = wheels;
    }
    describeYourself(){
      console.log(`I am a ${this.description} with ${this.wheels} wheels`);
    }
  }
  var coolSkiVan = new Vehicle("cool ski van", 4);
  coolSkiVan.describeYourself();

  class SemiTruck extends Vehicle{
    constructor(){
      super("semi truck", 18);
    }
  }
  var groceryStoreSemi = new SemiTruck();
  groceryStoreSemi.describeYourself();
```

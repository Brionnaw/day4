// this file is for day 4 lecture
// "this" keyword- point to the parent characer, its refferencing sonething

    //  let counter ={  // this is object / need to be invoke(line 13)
  //  _count: 0,
   //    addCount: function(){
//      this._count = this._count + 1;
//      console.log(this._count);
  //  }
//  }



//window.setInterval(counter.addCount.bind(counter), 1000); - bind keyword

// call - allow this to be the first argument of a function

//function doSomething (a, b) {

//  console.log(this);
//}

//  doSomething.call("box", 2, 3);

// catergory classes
//interface IRules {
  //  foodName:string
  //  price:number
//  }
//  class Food implements IRules {
//    constructor() {
//      this.foodName = 'cheeseburger';
//      this.price = 5.00;
//    }
  //  foodName:string
  //  price:number
//    getdiscount(){
//    }
//  }

  // let food1 = new Food()
//   console.log(food1);
   // instance  (keyword "new" creates an object)



   //let a:string = 'Hello World';

  //if(typeof(a) === 'number') {

   //}else {
//     console.log("doesn't match");
  // }


//trycatchbox
  // let car;
  // try {
  //   car.doSomething()
  // }
  // catch (err) {
  //   console.error('err'); // create errors
  // }
  //
  // catch (err) {
  //   console.lof('err'); // create errors
  // }

//closure :
//
// let a = 'hello world';  // variable memory
// a = 'something different';
// console.log(a);


//closures -  interview question:
// function createFunction () {
//   let a = 1;
//   return function() {
//     a +1;
//     console.log(a);
//   }
//   }
// let doSomething = createFunction(); // closure example
//    doSomething();
//    doSomething();


//curry function - technique requires a function that require more arguments .

//   function templateEmail (customerName) {
//     return function (productName)   {  //annoymous function
//     console.log(`Hey ${customerName}, you bought ${productName}`);
//     }
//   }
// let userEmail = templateEmail('brionna');// line 91 // useremail respresent inner function
// userEmail('spoons');
// userEmail('forks');
// userEmail('knives');

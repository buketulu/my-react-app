function curry1(f){
    return function(a){
      return function(b){
        return f(a,b);
      }
    }
  }
  function multiply(a,b){
    return a*b;
  }
  
  let a=curry1(multiply)(2)(3);
  //console.log(a);
  
  function curry2(func) {
    return function curried(...args) {
      if (args.length >= func.length) {
        return func.apply(this, args);
      } else {
        return function(...args2) {
          return curried.apply(this, args.concat(args2));
        }
      }
    };
  }
  
  function curry3(func){
        return function rec(...args){
          if (args.length<func.length){
              return function(...args2){
                return rec.apply(this,args.concat(args2));
              }
          }else{
              return func.apply(this,args);
          }
          return func.apply(this,args);
        }  
  }
  function sumsi(a, b, c) {
    return a + b + c;
  }
  //console.log( curry3(sumsi)(7)(8,9));
  /* console.log( curriedSum(1, 2, 3) ); // 6, still callable normally
  console.log( curriedSum(1)(2,3) ); // 6, currying of 1st arg
  console.log( curriedSum(1)(2)(3) ); // 6, full currying
   */
  
  /*let sum= function (a){
           return function (b){
                if (b) return sum(a+b);
                else return a;
              }(
  }*/
  let sum = (a) => (b) => (b) ? sum(a+b) : a;
  console.log("bitti",sum(1)(2)(3)(4)(5)())
  
//Example of:
//Closure
//lexical environment
//Recursion
//execution context, memory allocations
//a function returns different types
//a variable can be assigned different types


function foo2(isExec, maxNumber){
    const min=1;
    var howManyTimes=0;
    function foo(i){
      if (i===min){
        console.log("How many times foo is executed:" + ++howManyTimes);
        return 1;
      }
      return foo(i-1)+i;
    }
    if (isExec){
      return foo(maxNumber);
    }else {
      return foo;
    }
  }
  
  var count=foo2(false);
  console.log("1+2+..+10="+count(10));
  console.log("give a break! check the function count in global context");
  console.log(count);
  console.log("1+2+..+9="+ count(9));
  count=foo2(true,8)
  console.log("1+2+..+8=" + count);

  function xyz(){
    let count=0;
    let key={
        city:"Ankara",
        inc: function (){
          count++;
          console.log(this.city, count);
        }
    }
    return key.inc;
  }
  let key={
    city:"İstanbul"
  }
  let myFunc=xyz().bind(key);
  myFunc();
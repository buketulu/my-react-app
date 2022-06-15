
function instanceOf(Func){
    var obj = this;
    while(obj !== null){
      if(Object.getPrototypeOf(obj) === Func.prototype)
        return true;
      console.log(obj.__proto__, Object.getPrototypeOf(obj));
      obj = Object.getPrototypeOf(obj);
    }
    return false;
  }  
  console.log(instanceOf.call(abc, Function));
  function abc(){
  
  }
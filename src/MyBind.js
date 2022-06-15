
let printMyName= function(city, country, world){
    console.log(this.fname, this.lname, city, country, world);
  }
  
  
  Function.prototype.myBind= function(obj, ...args){
      let func=this;
      return function(...newArgs){
        func.apply(obj,[...args, ...newArgs]);
      }
  }
  let myFunc=printMyName.myBind(name, "Ankara", "Turkiye");
  myFunc("Dünya");
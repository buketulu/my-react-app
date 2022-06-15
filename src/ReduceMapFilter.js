const users=[
    {fName:"Buket", LName:"Ulu", age:45},
    {fName:"Demir", LName:"Ulu", age:6},
    {fName:"Begüm", LName:"Ulu", age:15},
    {fName:"Doruk", LName:"Ulu", age:6},
  
  ];
  
  let output = users.reduce(function(difAge, cur){
      let count=difAge[cur.age];
      if (count===undefined){
        difAge[cur.age]=1;
      }else{
        difAge[cur.age]=++count;
      }
      return difAge;
  },{});                              
  
  let output2 = users.filter(cur => cur.age<32).map(cur=>cur.fName);
  let output3 = users.reduce(function(arr, cur){
    if (cur.age<32){
      arr.push(cur.fName);
    }
    return arr;
  },[])
  console.log(output3);
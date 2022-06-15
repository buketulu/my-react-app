function getUsers(callback) {
  setTimeout(() => {
    callback([
      { username: 'john', email: 'john@test.com' },
      { username: 'jane', email: 'jane@test.com' },
    ]);
  }, 1000);
}

function findUser(username, callback) {
  getUsers((users) => {
    const user = users.find((user) => user.username === username);
    callback(user);
  });
}

findUser('john', console.log);
//console.log(vowelArr);
/* let count1=99;
function attachEventListener(){
   let count=0;
    document.getElementById("ClickMe").
    addEventListener("click",
      function xyz() {
        count1=55;
        console.log("Tıkla:",++count);
    });
  }
  attachEventListener();
 */
 /*var a=0;
 function x(){
   a++;
  console.log("x:", a);
 }
 x();
 setTimeout(function(){
   x();
  }, 0);
 console.log("a:",a);
 var k=0;
 //alert("a:"+a);
 console.log("sonrası:"+a);
 var b=9;
 let c=8;
  function attachEventListenerToClickMe1(){
      let count=0;
      document.getElementById("ClickMe1").addEventListener("click", function abc(){
      console.log("Button Click ", ++count);
    })
  }
  attachEventListenerToClickMe1();
  let count=0;
  document.getElementById("ClickMe2").addEventListener("click", function abc(){
    console.log("Button Click ", ++count);
  })*/
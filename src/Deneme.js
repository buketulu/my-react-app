import fetch from  "node-fetch";

(async () =>{
    console.log("Başladık...");
    await fetch('https://dummyjson.com/carts/18')
      .then(response=>response.json())
      .then(jSonData=>console.log(jSonData))
      .catch(error=>console.log("Error:", error.message));
    console.log("Bitti...");
  });

  (async () =>{
    console.log("Başladık...");
    let response = await fetch('https://dummyjson.com/cart');
    if (!response.ok){
        console.log("HAta aldık");
    }else {
    let data = await response.json();
    console.log(data);
    }
    console.log("Bitti...");
})();
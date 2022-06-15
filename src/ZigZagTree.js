class MyTree {
    constructor(parent, value, left, right){
      this.parent=parent;
      this.value=value;
      this.left=left;
      this.right=right;
    }
  }
  
    /*var myArray;
    myArray[0]= new MyTree(-1,1,1,2);
    myArray[1] = new MyTree(0,2,-1,-1);
    myArray[2] = new MyTree(0,3,3,4);
    myArray[3] = new MyTree(2,4,5,7);
    myArray[4] = new MyTree(2,6,7,5);
    myArray[5] = new MyTree(3,8,-1,-1);
    myArray[6] = new MyTree(3,9,-1,-1);
    myArray[7] = new MyTree(4,6,-1,-1);
    myArray[8] = new MyTree(4,7,-1,-1);*/
    const myArray=[
        new MyTree(-1,1,1,2), //0
        new MyTree(0,2,-1,-1), //1
        new MyTree(0,3,3,4), //2
        new MyTree(2,4,5,6),//3
        new MyTree(2,5,7,8), //4
        new MyTree(3,8,-1,-1),//5
        new MyTree(3,9,-1,-1),//6
        new MyTree(4,6,-1,-1), //7
        new MyTree(4,7,-1,-1)//8
    ]
   
    function zigzagTree(){
        const levelMap=new Map([]);
        function createLevelListWithFor(){
          const oddStack=[];
          const evenStack=[myArray[0]];
          let level=0;
          while(true){ 
              if (!(level%2) && evenStack.length>0){
                //levelMap.set(level,evenStack.reverse);
                while(evenStack.length>0){
                  let node=evenStack.pop();
                  levelMap.set(level,levelMap.get(level)===undefined ? 
                      [node.value] :levelMap.get(level).concat([node.value]));
                  if (node.left!=-1)  oddStack.push(myArray[node.left]);
                  if (node.right!=-1) oddStack.push(myArray[node.right]);
                  
                }
              }else if (oddStack.length>0){
                //levelMap.set(level,oddStack);
                while(oddStack.length>0){
                  let node=oddStack.pop();
                  levelMap.set(level,levelMap.get(level)===undefined ? 
                      [node.value] :levelMap.get(level).concat([node.value]));
                  if (node.right!=-1) evenStack.push(myArray[node.right]);
                  if (node.left!=-1)  evenStack.push(myArray[node.left]);
                }
              }else{
                break;
              }
              level++;
          } 
          //levelMap.forEach((arr, level) => console.log(level,arr));  
        }
        createLevelListWithFor();
        function createLevelList(level, node){
            if (node===undefined) return;
            const oldLevelArr=levelMap.get(level);
            if (oldLevelArr!=undefined){
              level%2 ? oldLevelArr.unshift(node.value) : oldLevelArr.push(node.value);
              levelMap.set(level,oldLevelArr);
            }  else{
              levelMap.set(level, [node.value]);
            }
            
            createLevelList(level+1,myArray[node.left]);
            createLevelList(level+1,myArray[node.right]);
        }
        //createLevelList(0,myArray[0]);
        //console.log(levelMap);
        levelMap.forEach((arr, level) => console.log(level,arr));
  }
  zigzagTree();
  
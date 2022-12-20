const map = new Map().set('abc',1).set('def',2)

for(const[key,value] of map){
  console.log(key + ' is mapped to'+ value);
}
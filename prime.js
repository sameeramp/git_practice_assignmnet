let count=0;
function checkprime(num){
  for(let i=0;i<num;i++){
    if(num%i==0){
      count++;
    }if(count==2){
       return true;
    }else{
    return false;
    }
  }
}
let result=checkprime(5);
console.log(result)


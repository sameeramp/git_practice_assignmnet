let factor=0;
function checkprime(num){
  for(let i=1;i<=num;i++){
    if(num%i==0){
      factor++;
    }
  }
  if(count==2){
       return true;
    }else{
    return false;
    }
}
let result=checkprime(5);
console.log(result)


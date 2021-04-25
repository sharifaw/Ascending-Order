let num1 = +(prompt("First Number")) || 0;
let num2 = +(prompt("Second Number")) || 0;
let num3 = +(prompt("Third Number")) || 0;
if (num1 < num3) {
  if (num1 <= num2 && num2 <= num3) {
      alert([num1,num2,num3]);
  } 
  else if (num2 < num3){
      alert([num2,num1,num3]);
  }
  else{
      alert([num1,num3,num2]);
  }
} 
else if (num2 < num1){
    if (num2 <= num3 && num3 < num1){
        alert([num2,num3,num1]);
    }
    else if (num3 < num2){
        alert([num3,num2,num1]);
    }
    
}
else if (num3 < num2){
    if(num3 <= num1 && num1 < num2){
        alert([num3,num1,num2]);
    }
    
    
}
else{
    alert([num1,num2,num3]);
}
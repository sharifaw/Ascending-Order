let a = +(prompt("First Number")) || 0;
let b = +(prompt("Second Number")) || 0;
let c = +(prompt("Third Number")) || 0;
if (a < c) {
  if (a <= b && b<c) {
      alert([a,b,c]);
  } 
  else if (b < a){
      alert([b,a,c]);
  }
  else{
      alert([a,c,b]);
  }
} 
else if (b < a){
    if (b <= c && c<a){
        alert([b,c,a]);
    }
    else if (c<b){
        alert([c,b,a]);
    }
    
}
else if (c < b){
    if(c <= a && a<b){
        alert([c,a,b]);
    }
    
    
}
else{
    alert([a,b,c]);
}
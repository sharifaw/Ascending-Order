// let a = +(prompt("First Number")) || 0;
// let b = +(prompt("Second Number")) || 0;
// let c = +(prompt("Third Number")) || 0;

// if (a<b || a ==c){
//     if (a<c){
//         console.log(a,c,b);
        
//     }
//     else{
//         console(a,b,c);
//     }
// }

let a = +(prompt("First Number")) || 0;
let b = +(prompt("Second Number")) || 0;
let c = +(prompt("Third Number")) || 0;
if (a < c) {
  if (a == b) {
      alert([a,b,c]);
  } 
  else if (a < b && b < c) {
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
    if (b == c){
        alert([b,c,a]);
    }
    else if (b<c && c<a){
        alert([b,c,a]);
    }
    else if (c<b){
        alert([c,b,a]);
    }
    else{
        alert([b,a,c]);
    }
}
else if (c < b){
    if(c == a){
        alert([c,a,b]);
    }
    else if (c< a && a<b){
        alert([c,a,b]);
    }
    else if (a<c){
        alert([a,c,b]);
    }
    else {
        alert([c,b,a]); 
    }
}
else{
    alert([a,b,c]);
}
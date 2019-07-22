// console.log("Shubham>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
function triangle (a){
  let ptrn='';
  for(let i=1; i<=a; i++) {
    for(let j=1; j<=a-i; j++){  
      ptrn += " ";
    }
    for(let j=1; j<=i; j++){  
      ptrn += "* ";
    }
    ptrn += '\n';
  }

  console.log(ptrn);
}

triangle(5)
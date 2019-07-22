function diamond (a){
    let ptrn='';
       let space = a/2;
       let star=1;
    for(let i=1; i<=a; i++) {
      for (let j = 1; j <= space; j++){  
        ptrn += "  ";
      }
      for (let k = 1; k <= 2 * star - 1; k++){  
        ptrn += "* ";
      }

      if( i<=a/2){
        space--;
        star++;
    }else{
        space++;
        star--;
    }
      ptrn += '\n';
    }
  
    console.log(ptrn);
  }
  
  diamond(11)
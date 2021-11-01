// tail.js

function tail (arrTail) {
  let num = [];
  for (let i = 0; i < arrTail.length; i++) {
   if (i !== 0) {
     num.push(arrTail[i]);
   }
  } return num    
  }


module.exports = tail;




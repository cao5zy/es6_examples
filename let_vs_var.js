
function use_var() {
   var arr = [];
   for (var i = 0; i < 5; i++) {
   		arr[i] = () => {
   			console.log(i);
   		};
   }

   arr[2]();
}

function use_let() {
   let arr = [];
   for (let i = 0; i < 5; i++) {
   		arr[i] = () => {
   			console.log(i);
   		};
   }

   arr[2]();
}

use_var(); //5
use_let(); //2
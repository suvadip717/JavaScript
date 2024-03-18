/* Rewrite the below code without using let & const, so that it throw referance error
function show(){
    {
    var x = 9
    var y = 10
    }
    console.log(x, y)
}

show() */

function show() {
  {
    (() => {
      var x = 9;
      var y = 10;
    })();
    console.log(x, y);
  }
}

show();

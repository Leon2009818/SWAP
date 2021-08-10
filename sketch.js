

var a = prompt('Enter the first variable: ');
var b = prompt("Enter the second variable")
function setup(){
  var b2 = createButton("click here to Swap");
b2.mousePressed(SWAP);
  }


function draw()
{
}
function SWAP(){
  [a,b] = [b,a]
  console.log("The value of a = ",+a)
  console.log("The value of b = ",+b)
}
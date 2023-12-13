function display(val) {
  document.getElementById("result").value += val;
}
function Clr() {
  document.getElementById("result").value= "" ;
}
function equate() { 
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
}
function Del() { 
  let x = document.getElementById("result").value;
  document.getElementById("result").value = x.slice(0, -1);
}
function per() {
  document.getElementById("result").value = "Cannot Calculate";
}
// sum variable
let sum = "";

// concat sum
function buildSum(char) {
  sum += char;
  document.getElementById("output").innerHTML = sum;
}

// calculate
function calculate() {
  sum = eval(sum);
  document.getElementById("output").innerHTML = sum;
}

// clear
function reset() {
  sum = "";
  document.getElementById("output").innerHTML = sum;
}

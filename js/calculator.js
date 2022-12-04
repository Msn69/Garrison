function browser() {
const params = new URLSearchParams(location.search);
const num1 = params.get('num')
const num2 = params.get('num2')
const type = params.get('type')
let answer = parseFloat(num1) type parseFloat(num2);
document.getElementById("solution").innerHTML = answer;
}
function full() {
document.getElementById("window").requestFullscreen()
}

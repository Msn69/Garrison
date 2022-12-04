function browser() {
const params = new URLSearchParams(location.search);
const browser1 = params.get('q')
let result = browser1.replace("%3A", ":");
let browser = result.replace("%2f", "/");
document.getElementById("window").src = browser;
}
function full() {
document.getElementById("window").requestFullscreen()
}

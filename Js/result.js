const results = JSON.parse(localStorage.getItem("Array"));
console.log(results);

function getMostFrequent(arr) {
  let countMap = {};
  let maxCount = 0;
  let mostFrequentItem;

  // First pass: Count the frequency of each element
  for (const item of arr) {
    countMap[item] = (countMap[item] || 0) + 1;
    // Optional: track max within this loop
    if (countMap[item] > maxCount) {
      maxCount = countMap[item];
      mostFrequentItem = item;
    }
  }
  return mostFrequentItem;
}

var win = getMostFrequent(results);
const heading = document.getElementById("House");
const desc = document.getElementById("desc");
const bg = document.documentElement.style;
var house = null;
console.log(win);

if (win == 1){
    heading.textContent = "Gensora";
    house = "Gensora";
    document.body.style.backgroundImage = "url('Assets/gensora.jpg')";
    desc.textContent = 'Your House is Gensora! “Where imagination creates worlds.”';
}
else if(win == 2){
    heading.textContent = "Enigma";
    house = "Enigma";
    document.body.style.backgroundImage = "url('Assets/enigma.jpg')";
    desc.textContent = 'Your House is Enigma! “Every secret has a solution.”';
}
else if(win == 3){
    heading.textContent = "Paradox";
    house = "Paradox";
    document.body.style.backgroundImage = "url('Assets/paradox.jpg')";
    desc.textContent = 'Your House is Paradox! “Beyond time. Beyond limits.”';
}
else if(win == 4){
    heading.textContent = "Veritas";
    house = "Veritas"
    document.body.style.backgroundImage = "url('Assets/veritas.jpg')";
    desc.textContent = 'Your House is Veritas! “Discover yourself. Become your best.”';
}
else if(win == 5){
    heading.textContent = "Chronovar";
    house = "Chronovar"
    document.body.style.backgroundImage = "url('Assets/chronovars.jpg')";
    desc.textContent = 'Your House is Chronovar! “Preserving the past. Shaping the future.”';
}
localStorage.setItem("house",house);
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";

function result(){
    let nigga = localStorage.getItem("name") + ";" + localStorage.getItem("grade") + ";" + localStorage.getItem("house");
    return nigga
}

console.log(result());
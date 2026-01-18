import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, doc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// --- FIREBASE CONFIGURATION ---
const firebaseConfig = {
  apiKey: "AIzaSyAUxvmTcmulV_TR_x2-dfSBMNor-z_vOBE",
  authDomain: "potterquiz-9e216.firebaseapp.com",
  projectId: "potterquiz-9e216",
  storageBucket: "potterquiz-9e216.firebasestorage.app",
  messagingSenderId: "956584152657",
  appId: "1:956584152657:web:da6c441e6488607804f270"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const elem = document.documentElement;

if (elem.requestFullscreen) {
    elem.requestFullscreen();
} else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
}

// --- FIREBASE SAVE FUNCTION ---
async function saveUserQuizData(grade, username, score, teamName) {
  try {
    const stringName = String(username); 
    const userRef = doc(db, "quiz_entries", stringName);
    
    await setDoc(userRef, {
      grade: grade,
      score: score,
      rank: teamName,
      updatedAt: serverTimestamp()
    }, { merge: true });

    console.log(`Successfully saved data for ${username}!`);
  } catch (error) {
    console.error("Error saving to Firestore:", error);
  }
}

// --- LOGIC TO CALCULATE HOUSE ---
const results = JSON.parse(localStorage.getItem("Array")) || [];

function getMostFrequent(arr) {
  let countMap = {};
  let maxCount = 0;
  let mostFrequentItem;

  for (const item of arr) {
    countMap[item] = (countMap[item] || 0) + 1;
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
var house = null;

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

localStorage.setItem("house", house);
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";

// --- THE FIXED RESULT FUNCTION ---
async function result() {
    let name = localStorage.getItem("name");
    let grade = localStorage.getItem("grade");
    let storedHouse = localStorage.getItem("house");

    // 1. Call the save function first
    // Note: 'win' is the score (1-5) calculated above
    await saveUserQuizData(grade, name, win, storedHouse);

    // 2. Prepare the string
    let infoString = name + ";" + grade + ";" + storedHouse;
    
    // 3. Return at the very end
    return infoString;
}

// --- EXECUTION ---
// Since result() is async, we call it like this:
result().then((data) => {
    console.log("Data saved and processed:", data);

});


import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, serverTimestamp } from "firebase/firestore";

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

async function saveUserQuizData(grade, username, score, teamName) {
  try {
    const stringGrade = String(grade); 
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

saveUserQuizData("12th", "Pjk", 67, "uganda");

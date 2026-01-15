import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  getDocs, 
  query, 
  orderBy, 
  limit, 
  terminate 
} from "firebase/firestore";

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

async function getLeaderboard() {
  try {
    console.log("--- POTTER QUIZ RESULTS ---");
    
    const quizCollection = collection(db, "quiz_entries");

    const q = query(quizCollection, orderBy("score", "desc"), limit(10));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log("No scores found yet!");
    } else {
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        console.log(`User: ${data.username} | Team: ${data.rank} | Score: ${data.score}`);
      });
    }

  } catch (error) {
    console.error("Error retrieving data:", error);
  } finally {
    await terminate(db);
  }
}

getLeaderboard();

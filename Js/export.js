import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import fs from "fs";

const firebaseConfig = {
  apiKey: "AIzaSyAUxvmTcmulV_TR_x2-dfSBMNor-z_vOBE",
  authDomain: "potterquiz-9e216.firebaseapp.com",
  projectId: "potterquiz-9e216",
  storageBucket: "potterquiz-9e216.firebasestorage.app",
  messagingSenderId: "956584152657",
  appId: "1:956584152657:web:da6c441e6488607804f270"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function exportToCSV() {
  console.log("Connecting to Firestore...");
  
  try {
    const querySnapshot = await getDocs(collection(db, "quiz_entries"));
    const data = [];

    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      
      // Convert Firebase Timestamps to readable strings
      let dateStr = "";
      if (docData.updatedAt && docData.updatedAt.toDate) {
        dateStr = docData.updatedAt.toDate().toISOString();
      }

      data.push({
        username: doc.id,
        grade: docData.grade || "",
        score: docData.score || 0,
        rank: docData.rank || "",
        updatedAt: dateStr
      });
    });

    if (data.length === 0) {
      console.log("No records found.");
      return;
    }

    // Define CSV Headers
    const headers = ["username", "grade", "score", "rank", "updatedAt"];
    
    // Create CSV rows
    const csvRows = [
      headers.join(","), // Header row
      ...data.map(row => 
        headers.map(header => `"${row[header]}"`).join(",")
      )
    ];

    const csvContent = csvRows.join("\n");

    // Write to file system
    fs.writeFileSync("quiz_results.csv", csvContent);
    
    console.log(`✅ Success! Exported ${data.length} rows to quiz_results.csv`);
    process.exit(0);
  } catch (error) {
    console.error("❌ Error exporting data:", error);
    process.exit(1);
  }
}

exportToCSV();
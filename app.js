import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
//import { initializeApp } from '../firebase/app';
//Add SDKs for Firebase products that you want to use
//https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, query, orderBy, limit, getDocs, getDoc, doc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

// app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuR8GKPG7JH35qtYtsbdKHbA74itTGOU4",
  authDomain: "zw-news.firebaseapp.com",
  projectId: "zw-news",
  storageBucket: "zw-news.appspot.com",
  messagingSenderId: "861472971436",
  appId: "1:861472971436:web:dff47c78dcf2b50e711d09"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const ref = collection(db, "Forum1");

let titlesHTML = '';
let eTitles = document.querySelector('.titles');

window.addEventListener("load", () => {
  const router = new Navigo("/");
  const render = async (content) => {
    const docSnap = await getDoc(doc(db, 'Forum1', content));
    eTitles.innerHTML = docSnap.data()['content'];
  }
  router
    .on("/news/:id/:title", (match) => {
      render(match.data['id']);
    })
    .on("/home", () => {
      render("Home");
    });
});

const q = query(ref, orderBy("timeStamp", "desc"), limit(30));
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  const docTitle = doc.data()['title'];
  let title = `
    <div class="titles__item">
      <div class="titles__item__title">
          <h4>
          <a href="/news/${doc.id}/docTitle" data-navigo>${docTitle}</a>
          </h4>
          <span>${doc.data()["timeStamp"].toDate().toDateString()}</span>
      </div>
      <img class="titles__item__img" src="${doc.data()['picUrl']}" />
    </div> 
    `;
  titlesHTML += title;
});
//middleLeft.appendChild(newsList);
eTitles.innerHTML = titlesHTML;
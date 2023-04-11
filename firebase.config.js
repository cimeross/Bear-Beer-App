import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyCEspz0a3VBu-LeV8I6Aa3LXYfhCY9KeNg",
	authDomain: "food-delivery-2ca26.firebaseapp.com",
	databaseURL:
		"https://food-delivery-2ca26-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "food-delivery-2ca26",
	storageBucket: "food-delivery-2ca26.appspot.com",
	messagingSenderId: "642202235393",
	appId: "1:642202235393:web:fdd21c302d783cb9be0600",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };

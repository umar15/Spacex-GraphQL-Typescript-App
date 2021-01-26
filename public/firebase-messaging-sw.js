importScripts("https://www.gstatic.com/firebasejs/8.2.3/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.3/firebase-messaging.js");
// import firebase from "firebase";

var firebaseConfig = {
	apiKey: "AIzaSyCAWlEMgDhc_iPq23mc7z70awZ63q8-ZRs",
	authDomain: "spacex-graphql-typescript.firebaseapp.com",
	projectId: "spacex-graphql-typescript",
	storageBucket: "spacex-graphql-typescript.appspot.com",
	messagingSenderId: "722482192178",
	appId: "1:722482192178:web:32a333db69165449a8012b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.messaging();

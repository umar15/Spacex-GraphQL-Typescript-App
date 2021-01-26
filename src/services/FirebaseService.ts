import firebase from "firebase";

var firebaseConfig = {
	apiKey: "AIzaSyCAWlEMgDhc_iPq23mc7z70awZ63q8-ZRs",
	authDomain: "spacex-graphql-typescript.firebaseapp.com",
	projectId: "spacex-graphql-typescript",
	storageBucket: "spacex-graphql-typescript.appspot.com",
	messagingSenderId: "722482192178",
	appId: "1:722482192178:web:32a333db69165449a8012b",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export function initNotification() {
	Notification.requestPermission().then((permission) => {
		console.log(permission);
		if (permission === "granted") {
			messaging
				.getToken()
				.then((currentToken) => {
					if (currentToken) {
						console.log("Token => ", currentToken);
					} else {
						console.log(
							"No registration token available. Request permission to generate one."
						);
					}
				})
				.catch((err) => {
					console.log("An error occurred while retrieving token. ", err);
				});
		}
	});
}

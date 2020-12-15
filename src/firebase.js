import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2VyB3IVhfsh8wqtHZjfpcKuFGUMUGfG4",
  authDomain: "gameria-bda.firebaseapp.com",
  databaseURL: "https://gameria-bda-default-rtdb.firebaseio.com",
  projectId: "gameria-bda",
  storageBucket: "gameria-bda.appspot.com",
  messagingSenderId: "561890909364",
  appId: "1:561890909364:web:2cdedbbbaf0614139e0be1",
};
firebase.initializeApp(firebaseConfig);

export const handleSnapshot = (snapshot) => ({
  ...snapshot.val(),
  ...{ id: snapshot.key },
});
export const gamesRef = firebase.database().ref("games");
export const user = firebase.auth().currentUser;
export const auth = firebase.auth();

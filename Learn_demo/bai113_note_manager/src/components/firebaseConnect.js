import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

var config = {
    apiKey: "AIzaSyCqOCFXbRfVYsrTRD7Tfc7lPjc2ZfHm2-k",
    authDomain: "notereact-97d17.firebaseapp.com",
    databaseURL: "https://notereact-97d17.firebaseio.com",
    projectId: "notereact-97d17",
    storageBucket: "notereact-97d17.appspot.com",
    messagingSenderId: "835959247287"
};
firebase.initializeApp(config);

export const noteData = firebase.database().ref('dataNote');

// update value
// data.set({
//     id: 3,
//     title: "Alias",
//     content: "Demo"
// })

// get value
// data.once('value').then(function(snapshot) {
//     console.log("snapshot",snapshot.val());
// })
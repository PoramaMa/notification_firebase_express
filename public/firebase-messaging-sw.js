importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyDqpw5UbHOKejed7uZdFaVYGaEbVUmFjYw",
    authDomain: "testnoti-709f4.firebaseapp.com",
    projectId: "testnoti-709f4",
    storageBucket: "testnoti-709f4.appspot.com",
    messagingSenderId: "873103653252",
    appId: "1:873103653252:web:c6103781dcb51ef33d45d1",
    measurementId: "G-RWD6KSFKJ8"
};

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging()

messaging.onBackgroundMessage(payload => {
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: notificationTitle,
        icon: '<>'
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});
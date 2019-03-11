window.firebase = require('firebase/app')
var firebaseui = require('firebaseui')
import 'firebaseui/dist/firebaseui.css'
import store from './store'

// Add additional services that you want to use
require('firebase/auth')

//NOTICE: THIS IS WHERE WE ADD OUR FIRBASE TOKEN
const config = {
    apiKey: "AIzaSyAj9fmEb0AGb6NfHd60OPxmT5LdpbBaWH0",
    authDomain: "upheld-beach-230723.firebaseapp.com",
    databaseURL: "https://upheld-beach-230723.firebaseio.com",
    projectId: "upheld-beach-230723",
    storageBucket: "upheld-beach-230723.appspot.com",
    messagingSenderId: "237185115623"
}
//END OF FIREBASE TOKEN

window.firebase.initializeApp(config)

window.ui = new firebaseui.auth.AuthUI(window.firebase.auth())

if (!window.location.href.includes(':8080')) {
    window.firebase.auth().onAuthStateChanged(function (user) {

        if (user) {
            let { displayName, email, emailVerified, photoUrl, uid, phoneNumber, providerData } = user

            store.commit('storeUser', {
                displayName,
                email,
                emailVerified,
                photoUrl,
                uid,
                phoneNumber,
                providerData
            })
            user.getIdToken().then(function (accessToken) {
                window.axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
            })
            console.log(user) // eslint-disable-line
        }
    }, function (error) {
        console.log(error) // eslint-disable-line
    })
}
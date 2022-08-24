import firebase from 'firebase/compat/app'
import { getFirestore } from 'firebase/firestore'
import 'firebase/compat/auth'
import 'firebase/firestore'
import 'firebase/compat/analytics'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
	apiKey: 'AIzaSyBeV7jOX4Dk6GeLRqqrNKh4dDGYDrC5eLY',
	authDomain: 'twitter-clone-8a807.firebaseapp.com',
	projectId: 'twitter-clone-8a807',
	storageBucket: 'twitter-clone-8a807.appspot.com',
	messagingSenderId: '435457560326',
	appId: '1:435457560326:web:55e01ce9be24360882d887',
	measurementId: 'G-34M3MCE6GJ',
}

const app = firebase.initializeApp(firebaseConfig)
export const db = getFirestore(app)
const auth = firebase.default.auth()
const provider = new firebase.auth.GoogleAuthProvider()

const storage = getStorage(app)
export { auth, provider, storage }
export default db

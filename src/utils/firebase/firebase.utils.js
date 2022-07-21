import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyBUoiW_VRJwsh1xH_vLqKOTf1AmiWZCPqs',
  authDomain: 'royaltee-clothing-db.firebaseapp.com',
  projectId: 'royaltee-clothing-db',
  storageBucket: 'royaltee-clothing-db.appspot.com',
  messagingSenderId: '762705873079',
  appId: '1:762705873079:web:96ff230eb712e8a787a532',
}

const firebaseApp = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)
  if (!userSnapshot.exists()) {
    // Create document
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      })
    } catch (error) {
      console.log('Error creating user', error.message)
    }
  }
  return userDocRef
}

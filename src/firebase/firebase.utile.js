import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCe3eNS8yK7cWWyqq9YkhocC43xQgaY1NA",
    authDomain: "crown-ecommerce-store-db.firebaseapp.com",
    projectId: "crown-ecommerce-store-db",
    storageBucket: "crown-ecommerce-store-db.appspot.com",
    messagingSenderId: "105728117646",
    appId: "1:105728117646:web:09cd1108cf18dc5ba732df",
    measurementId: "G-XKBFL3K016"
  };


  // add data to firestore database 
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    // console.log(userAuth);
    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdDate = new Date();

      try{
        await userRef.set({
          displayName, 
          email,
          createdDate, 
          ...additionalData
        })
      }
      catch(error){
        console.log("Error Creating User, Please Try Again", error.message);
      }
    }

    return userRef;
    
  }


//   initializing firebase 
firebase.initializeApp(config);

// google authentication api using firebase
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

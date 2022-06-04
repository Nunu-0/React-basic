import firebaseAuth from './firebase';

class AuthService{
    login(providerName){
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseAuth.auth().signInWithPopup(authProvider);
    }

    logout(){
        firebaseAuth.signOut();
    }

    onAuthChange(onUserChanged){
        firebaseAuth.onAuthStateChanged(user =>{
            onUserChanged(user);
        })
    }
}

export default AuthService;
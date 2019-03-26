// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
 
// Configure Firebase.
const config = {
  apiKey: 'AIzaSyBJ9oii5VC84ZLRFDaii_aAsNV21NPA_Ak',
  authDomain: 'our-story-a8a0d.firebaseapp.com',
  // ...
};
firebase.initializeApp(config);
 
class Login extends React.Component {
 
  // The component's Local state.
  state = {
    isSignedIn: false // Local signed-in state.
  };
 
  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };
 
  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ 
        isSignedIn: !!user,
        // userID: user.id
      })
      localStorage.setItem("userID",user.uid)
    })
  }
  signOut = () => {
    firebase.auth().signOut();
    this.setState({isSignedIn: false})
  }

  render() {
    return (
      <div>
        {this.state.isSignedIn ? (
          // replace this with jsx for home page
          <span>
            {/* <div>Signed In!</div>
            <button onClick={() => this.signOut()}>Sign Out!</button> */}
            <h1>Welcome {firebase.auth().currentUser.displayName}. Our story is your story. </h1>
          </span>
        ) : (
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
        )}
      </div>
    )
    
  }
}
export default Login;



//**********Saving Old Code Below************\\


// import React from "react";
// import "./style.css";

// function Login(props) {
//   return <div className="login">
//   <div>
//     This is where you login
//   </div>
//   </div>;
// }

// export default Login;
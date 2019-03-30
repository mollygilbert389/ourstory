// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import Navbar from "../Navbar";
import TextBox from "../TextBox";
import "./style.css";
 
// Configure Firebase.
const authApiKey = `${process.env.REACT_APP_authApiKey}`;

const config = {
  apiKey: authApiKey,
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
        <Navbar
          signOut = {() => this.signOut()}
          isSignedOut = {this.state.isSignedIn}
         
        />

        
        {this.state.isSignedIn ? (
          // replace this with jsx for home page
          <span>
            {/* <div>Signed In!</div>
            <button onClick={() => this.signOut()}>Sign Out!</button> */}
            <h1 className="heading">Welcome {firebase.auth().currentUser.displayName}.</h1>
          </span>
        ) : (
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
        )}

        {/* TextBox testing*/}
        <TextBox 
        // onClick = {() => this.addText()}
        isSignedOut = {this.state.isSignedIn}
        />
        
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
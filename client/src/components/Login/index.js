// Import FirebaseAuth and firebase.
import React, { Component } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import Navbar from "../Navbar";
import { TextBox, Btn1 } from "../TextBox";
import "./style.css";
import axios from "axios";
import API from "../../utils/API"

// Configure Firebase.
const authApiKey = `${process.env.REACT_APP_authApiKey}`;
const message = "Welcome! Our goal is to write the longest collabrative story ever written. Please sign in to add your part."
const outMessage = ""

const config = {
  apiKey: authApiKey,
  authDomain: 'our-story-a8a0d.firebaseapp.com',
  // ...
};
firebase.initializeApp(config);

class Login extends Component {

  // The component's Local state.
  state = {
    isSignedIn: false, // Local signed-in state.
    sentence: "",
    books: []

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
      localStorage.setItem("userID", user.uid)
    })
    this.loadBooks();
  }
  signOut = () => {
    firebase.auth().signOut();
    this.setState({ isSignedIn: false })
  }
  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, UserText: "" })
        // res.data.forEach(element => {
        //   console.log(element.author);
        // });
        // console.log(res);
      )
      .catch(err => console.log(err));
  };
  yay = () => {
    //console.log("eer");
    //var a=TextBox.value();
    //console.log(this.state.sentence)
    var obj = {
      //userID: this.sentence,
      UserText: this.state.sentence
    };
    console.log(obj);
    // console.log("posting");
    axios.post("http://localhost:3001/api/books", obj).then((data) => console.log(data));
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, author: "" })
        // res.data.forEach(element => {
        //   console.log(element.author);
        // });
        // console.log(res);
      )
      .catch(err => console.log(err));
  };
  handleFormSubmit = event => {
    event.preventDefault();
    //if (this.state.sentence) {
    API.saveBook({
      UserText: this.state.sentence,
    })
    // .then(res => this.loadBooks()).then(
    //   function(){
    //     window.location.reload();
    //   }
    //   )
    // .catch(err => console.log(err));
    // }
  };
  render() {
    return (
      <div>
        <Navbar
          signOut={() => this.signOut()}
          isSignedOut={this.state.isSignedIn}
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

          {this.state.isSignedIn ? (
          <span>
             <h1>{outMessage}</h1>
          </span>
        ) : (
          <span>
            <h1 className="signout">{message}</h1>
        </span>
        )}

        <TextBox
          // onClick = {() => this.addText()}
          isSignedOut={this.state.isSignedIn}
          value={this.state.sentence}
          onChange={this.handleInputChange}
          name="sentence"

        />

        <Btn1
          isSignedOut={this.state.isSignedIn}
          onClick={this.yay}
        >
        </Btn1>
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
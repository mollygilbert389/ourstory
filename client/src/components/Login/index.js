// Import FirebaseAuth and firebase.
import React, { Component } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import Navbar from "../Navbar";
import { TextBox, Btn1 } from "../TextBox";
import "./style.css";
import axios from "axios";
import API from "../../utils/API"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


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
    books: [],
    users: [],
    string: "",
    started: false
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
    this.getWords();
  }

getWords = () => {
    axios.get("/api/books")
      .then((data1) => {
        var string1;
        var array = [];
        data1.data.forEach(e => {
          array.push(e.UserText);
        })
        array.reverse();
        array.forEach(e => {
          string1 += e + " ";
        })
        this.setState({ string: string1 })
      }
      );
  }

signOut = () => {
    firebase.auth().signOut();
    this.setState({ isSignedIn: false })
  }

loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, UserText: "" })
      
      )
      .catch(err => console.log(err));
  };
  
yay = () => {
    var obj = {
      //userID: this.sentence,
      UserText: this.state.sentence
    };
    // console.log("posting");
    axios.post("/api/books", obj).then((data) => console.log(data));
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

//////////////Modal Logic//////////////////////////////
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    // this.hideButton = this.hideButton.bind(this);
    // this.showButton = this.showButton.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
    this.setState({started: true})
  }

  handleShow() {
    this.setState({ show: true });
  }

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
        
        {this.state.isSignedIn ? (
          <div>
          <button className='startbtn' onClick={this.handleShow}>Start</button>
          <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>How to begin</Modal.Title>
          </Modal.Header>
              <Modal.Body>Once you click the close button in this box you will have 90 seconds to add your sentance. Please click submit once you are ready to add.</Modal.Body>
              <Modal.Footer>
           <Button className="closebtn" variant="danger" onClick={this.handleClose}>
          Close
          </Button>
          </Modal.Footer>
          </Modal>
      </div>
          ) : (
          <div></div>
          )}

        <Btn1
          isSignedOut={this.state.isSignedIn && this.state.started}
          onClick={this.yay}
        >
        </Btn1>


        
        <div>
          {this.state.string}
        </div>
        {/* you have to put the divs here then add them on the book pages, and change the z index */}
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
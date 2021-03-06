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
    authDomain: "meshbro-d74e6.firebaseapp.com",
    databaseURL: "https://meshbro-d74e6.firebaseio.com",
    projectId: "meshbro-d74e6",
    storageBucket: "meshbro-d74e6.appspot.com",
    messagingSenderId: "649310043102",
    appId: "1:649310043102:web:f728e767771b774b"
};


firebase.initializeApp(config);
class Login extends Component {
  // The component's Local state.
  state = {
    isSignedIn: false, // Local signed-in state.
    isNewUser: true,
    sentence: "",
    books: [],
    users: [],
    text: "",
    textLeft: "",
    textRight: "",
    string: "",
    started: false,
    theTimer: false,
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

      localStorage.setItem("userID", user.uid)
      console.log(user.uid)

      axios.post("/api/books/newUser", { userID: user.uid })
        .then((results) => {
          this.setState({
            isSignedIn: !!user,
            isNewUser: results.data
          })
        });
    });
    this.loadBooks();
    this.getWords();
    this.tweetDelay();
  }

  newUserOrNot = () => {
    if (this.state.isNewUser) {
      console.log("can add sentence")
      return (
        <React.Fragment>
          <TextBox
            isSignedOut={this.state.isSignedIn}
            value={this.state.sentence}
            textChange={this.handleInputChange}
            name="sentence"
          />
          <Btn1
            isSignedOut={this.state.isSignedIn && this.state.started}
            onClick={this.yay}
          />
        </React.Fragment>)
    }
    else {
      console.log("can not add sentence")
      return ( null,
      <div className="empty"></div>
      )
    };

  }

  tweet = () => {
    axios.get("/api/books/tweeter")
  }


  getWords = () => {
    axios.get("/api/books")
      .then((data1) => {
        var string1;
        var array = [];
        var arrayLeft = [];
        var arrayRight = [];
        data1.data.forEach(e => {
          array.push(e.UserText);
        })
        array.reverse();
        array.forEach(e => {
          string1 += e + " ";
        })
        this.setState({ text: string1 })
        var size = array.length;
        if (size < 50) {

          if (size == 0) { }
          else {
            for (var x = 0; x < size; x++) {
              arrayLeft.push(array[x]);
              console.log(array[x]);
              if (x == 25) {
                for (x += 1; x < size; x++) {
                  arrayRight.push(array[x]);
                  console.log(array[x]);
                  if (x == 50) { break; }
                }
                break;
              }
            }
            var left = "";
            var right = "";
            arrayLeft.forEach(e => {
              left += e + " ";
            })
            arrayRight.forEach(e => {
              right += e + " ";
            })
            this.setState({
              textLeft: left,
              textRight: right

            })

          }
        }
        else {

          for (x = 25; x > 0; x--) {
            arrayRight.push(array[size - x]);
          }
          for (x = 50; x > 25; x--) {
            arrayLeft.push(array[size - x]);

          }
          var left = "";
          var right = "";
          arrayLeft.forEach(e => {
            left += e + " ";
          })
          arrayRight.forEach(e => {
            right += e + " ";
          })
          this.setState({
            textLeft: left,
            textRight: right

          })

        }

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

  tweetDelay = () => {
    setTimeout(this.tweet, 86400000)
  }

  tweet = () => {
    axios.get("/api/books/tweeter")
    this.tweetDelay()
  }

  // tweet = () => {
  //   axios.get("http://localhost:3001/api/books/tweeter")
  //   .then(function(err, res) {
  //     console.log(res)
  //   })
  // }

  resetActiveUser = () => {
    axios.get("/api/books/reset")
    .then((result) => {
      console.log(result.data)
//       window.location.reload()
        setTimeout(30000)
    })
  }
 
  yay = () => {
    var obj = {
      userID: localStorage.getItem("userID"),
      UserText: this.state.sentence
    };
    axios.post("/api/books", obj)
      .then((data) => console.log(data))
      .then(
        function () {
          window.location.reload();
        }
      );
    
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      sentence: value
    });
  };

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, author: "" })
      )
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.saveBook({
      UserText: this.state.sentence,
    })
    document.getElementById(this.value).value = "";
  };

  //////////////Modal Logic//////////////////////////////
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    // this.setActiveUser = this.setActiveUser.bind(this)
    // this.alertme = this.alertme.bind(this)

    this.state = {
      show: false,
      timer: false,
      activeUser: "asofhoasfhof",
    };
  }




  handleClose() {
    this.setState({ show: false });
    this.setState({started: true})
    this.resetActiveUser()
  }


 
  handleShow() {
    axios.get("/api/books/activeornah")
    .then((result) => {
      console.log(result.data)
      if (result.data === true) {
        alert("I'm sorry, someone else is editing")
      } else {
        this.setState({ show: true });
      }
    })
  }


  render() {
    return (
      <div>
        <Navbar
          signOut={() => this.signOut()}
          isSignedOut={this.state.isSignedIn}
          onClick={this.tweet}
        />
        {this.state.isSignedIn ? (
          // replace this with jsx for home page
          <span>
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
        {this.newUserOrNot()}

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

        <div id="leftDiv">
          {this.state.textLeft}
        </div>

        <div id="rightDiv">
          {this.state.textRight}
        </div>
      </div>
    )
  }
}
export default Login;

import React, { Component } from "react";
import Book from "./components/Book";
import Login from "./components/Login";
// import SignOut from "./components/SignOut";
// import Title from "./components/Title";
import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox"
import axios from "axios";

class App extends Component {
  state = {
    showLogin: true,
    // showSignOut: false,
    showTextBox: false
  }

  addText = () => {
    var obj ={
      userID:"s9UGkEuCPeYVKtHS4YzGIvmUY4i2",
      text: "Hello World!"
    };
    // console.log("posting");
    axios.post("/api/books",obj).then((data)=>console.log(data));
  }

  render() {
    return (
      <div>
        

        {this.state.showLogin ?
          <div>
            <Login>

            </Login>

          </div> : null
        }

        <TextBox 
        addText = {() => this.addText()}
        />

        

        <Book >

        </Book>

        <Footer>

        </Footer>
      </div>
    );
  }
}

export default App;

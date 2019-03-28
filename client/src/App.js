import React, { Component } from "react";
import Book from "./components/Book";
import Login from "./components/Login";
import SignOut from "./components/SignOut";
import Title from "./components/Title";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { TextBox, Btn } from "./components/TextBox"




class App extends Component {
  state = {
    showLogin: true,
    // showSignOut: false,
    showTextBox: false,
    sentence: ""


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

        {/* <Login /> */}

        <TextBox
         value={this.state.sentence}
         name="sentence"
         placeholder="Your Contribution ;-) (160 characters max)"

        >

        </TextBox>
        <Btn onClick={function(){
          console.log("hi");
        }}>
        
        </Btn>


        <Book>

        </Book>

        <Footer>

        </Footer>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Book from "./components/Book";
import Login from "./components/Login";
import SignOut from "./components/SignOut";
import Title from "./components/Title";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox"

class App extends Component {
  state = {
    showLogin: true,
    // showSignOut: false,
    showTextBox: false
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

        <TextBox>

        </TextBox>

        <Book>

        </Book>

        <Footer>

        </Footer>
      </div>
    );
  }
}

export default App;

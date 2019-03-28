import React, { Component } from "react";
import Book from "./components/Book";
import Login from "./components/Login";
import SignOut from "./components/SignOut";
import Title from "./components/Title";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { TextBox, Btn } from "./components/TextBox"

//import API from "../utils/API";



class App extends Component {
  state = {
    showLogin: true,
    // showSignOut: false,
    showTextBox: false,
    sentence: ""


  }

  handleFormSubmit = event => {
    event.preventDefault();
    var x = document.getElementById("textarea").value;
    // if (this.state.sentence) {
    //   API.saveBook({
    //     sentence: this.state.sentence,
    //   })
    //     .then(res => this.loadBooks()).then(
    //       function(){
    //         window.location.reload();
    //       }
    //       )
    //     .catch(err => console.log(err));
    // }
  };

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
        >
        </TextBox>
        <Btn
          disabled={(this.state.sentence)}
          onClick={this.handleFormSubmit}
        >

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

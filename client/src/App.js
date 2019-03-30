import React, { Component } from "react";
import Book from "./components/Book";
import Login from "./components/Login";
import Footer from "./components/Footer";
import axios from "axios";
import { TextBox, Btn, Btn1 } from "./components/TextBox"
// import API from "./utils/API"


class App extends Component {
  state = {
    showLogin: true,
    // showSignOut: false,
    showTextBox: false,
    UserText: []

  }
 
  addText = () => {
    var obj = {
      userID: this.userID,
      UserText: this.UserText
    };
    console.log(obj);
    // console.log("posting");
    axios.post("http://localhost:3001/api/books", obj).then((data) => console.log(data));
  }
 
  //Eddy commit
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   var x = document.getElementById("textarea").value;
  //   // if (this.state.sentence) {
  //   //   API.saveBook({
  //   //     sentence: this.state.sentence,
  //   //   })
  //   //     .then(res => this.loadBooks()).then(
  //   //       function(){
  //   //         window.location.reload();
  //   //       }
  //   //       )
  //   //     .catch(err => console.log(err));
  //   // }
  // };


  render() {
    return (
      <div>


        {/* TextBox testing*/}{this.state.showTextBox ?
          <div>
            <Login>

            </Login>
          </div> : null

        }



        <TextBox
        
        />


        {this.state.showLogin ?
          <div>
            <Login>

            </Login>

          </div> : null
        }

        
        <Btn1
          // disabled={(this.state.sentence)}
          // onClick={() => this.addText()}
          onClick={this.handleFormSubmit}
          disabled={!(this.state.showLogin)}
        //          onClick={this.handleFormSubmit}
        >

        </Btn1>

        
        {/* <Book >

        </Book> */}

        <Footer>

        </Footer>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Book from "./components/Book";
import Login from "./components/Login";
import Footer from "./components/Footer";
import axios from "axios";
import TextBox from './components/TextBox'
// import { TextBox, Btn } from "./components/TextBox"
import API from "./utils/API"

//eddy commit
// API.getBook().then(function (res, req) {
//   res.data.forEach(element => {
//     console.log(element.sentence);
//     // div.appendChild(element.author);
//   });
//   console.log(res);
// })

class App extends Component {
  state = {
    showLogin: true,
    // showSignOut: false,
    showTextBox: false,
    UserText: []

  }

  addText = () => {
    var obj ={
      userID: this.userID,
      UserText: this.UserText
    };
    // console.log("posting");
    axios.post("http://localhost:3001/api/books",obj).then((data)=>console.log(data));
  }

  //Eddy commit
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   var x = document.getElementById("textarea").value;
  //   if (this.state.sentence) {
  //     API.saveBook({
  //       sentence: this.state.sentence,
  //     })
  //       .then(res => this.loadBooks()).then(
  //         function(){
  //           window.location.reload();
  //         }
  //         )
  //       .catch(err => console.log(err));
  //   }
  // };


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
        onClick = {() => this.addText()}
        />

        

        {/* <Login /> */}
        {/* <TextBox
          value={this.state.sentence}
          name="sentence"
        >
        </TextBox>
        <Btn
          disabled={(this.state.sentence)}
          onClick={this.handleFormSubmit}
        >

        </Btn> */}



        <Book >

        </Book>

        <Footer>

        </Footer>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Book from "./components/Book";
import Login from "./components/Login";
import Footer from "./components/Footer";
import axios from "axios";
import TextBox from './components/TextBox'
import Tab from './components/Tab/Tab'
// import { TextBox, Btn } from "./components/TextBox"
// import API from "./utils/API"


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
    var obj = {
      userID: this.userID,
      UserText: this.UserText
    };
    // console.log("posting");
    axios.post("http://localhost:3001/api/books", obj).then((data) => console.log(data));
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
          <Router>
        <div className="row" style={{marginTop:200, paddingLeft: 15, position: "fixed", zIndex: 99}}>
              <Route exact path="/dictionary" component={Tab}/>
              <div className="col-sm-1">
              <Link to="/dictionary" role="button" className="btn btn-link">
              <i class="material-icons">check</i>
              </Link>
              <Link to="/" role="button" className="btn btn-link">
              <i class="material-icons">cancel</i>
              </Link>
              </div>
        </div>
    </Router>
        {/* TextBox testing*/}{this.state.showTextBox ?
          <div>
            <Login>

            </Login>
          </div> : null

        }



        <TextBox
          onClick={() => this.addText()}
        />




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

        {this.state.showLogin ?
          <div>
            <Login>

            </Login>

          </div> : null
        }



        <Book >

        </Book>


        <Footer>

        </Footer>
      </div>
    );
  }
}

export default App;

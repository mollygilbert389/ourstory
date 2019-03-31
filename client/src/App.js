import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Book from "./components/Book";
import Login from "./components/Login";
import Footer from "./components/Footer";
import axios from "axios";
import { TextBox, Btn, Btn1 } from "./components/TextBox"
import Tab from './components/Tab/Tab'
import Radium from 'radium'
// import API from "./utils/API"

const dicButtons = { 
  position: 'absolute',

}

const word = {
  transform: 'rotate(90deg)',
  transformOrigin: 'left top 0',
  marginLeft: '80px',
  backgroundColor: 'rgb(11, 56, 2)',
  height: '25px',
  width: '95px',
  borderRadius: '8px',
  color: 'white',
  textAlign: 'center',
}

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

        <Router>
        <div className="row">
              <Route exact path="/dictionary" component={Tab}/>
              <div className="col-sm-1">
             
             <div style={dicButtons}>
              <div className="search">
              <Link to="/dictionary" role="button" className="btn btn-success">
              <i className="material-icons">search</i>
              </Link>
              </div>
              
              <div className="cancel">
              <Link to="/" role="button" className="btn btn-danger">
              <i className="material-icons">cancel</i> 
              </Link>
              </div>
              </div>
              <div style={word}>
                Dictionary
              </div>
             
              </div>
        </div>
    </Router>
        
        <Btn1
          // disabled={(this.state.sentence)}
          // onClick={() => this.addText()}
          onClick={this.handleFormSubmit}
          disabled={!(this.state.showLogin)}
        //          onClick={this.handleFormSubmit}
        >

        </Btn1>



        {<Book >

        </Book>}



        <Footer>

        </Footer>
      </div>
    );
  }
}

export default Radium(App);

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Book from "./components/Book";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Tab from './components/Tab/Tab'
import Radium from 'radium' 

console.log(process.env.REACT_APP_API_KEY)

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
    console.log("button was clicked")
  }



  render() {
    return (
      <Router>

        {/* START LOGIN */}
        <div id="container">
          {this.state.showTextBox ?
            <div id="showLogin2">

              <Login>
              </Login>

            </div> : null}

          {this.state.showLogin ?
            <div id="showLogin2">
              <Login>
              </Login>
            </div> : null
          }
          {/* THIS IS END LOGIN */}

          {/* START DICTIONARY LOGIC*/}
          <div className="row">
            <Route exact path="/dictionary" component={Tab} />
            <div className="col-sm-1">

              <div style={dicButtons}>
              </div>

              <Link to="/dictionary" role="button">
                <div style={word}>
                  Dictionary
                  </div>

              </Link>
            </div>
          </div>
          {/* START DICTIONARY LOGIC*/}

          {/* START BOOK LOGIC*/}

          {/* <Route exact path ="/book" component={Book}/> */}
          {<Book>
          </Book>}
          {/* END BOOK LOGIC*/}

          <Footer/>
        </div>

      </Router>
    );
  }
}

export default Radium(App);

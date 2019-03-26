import React, { Component } from "react";
import Book from "./components/Book";
import Login from "./components/Login";
import Title from "./components/Title";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox"

class App extends Component {
  state = {
    showLogin: true,
    showTextBox: false
  }


  render() {
    return (
      <div>
        <Navbar/>
       
        {this.state.showLogin ? 
       <div> 
        <Login>

        </Login>
        
        </div> : null
      } 

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

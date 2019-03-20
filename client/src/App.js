import React, { Component } from "react";
import Book from "./components/Book";
import Login from "./components/Login";
import Title from "./components/Title";
import Footer from "./components/Footer"

class App extends Component {

  render() {
    return (
      <div>
        <Title>Our Story</Title>
       
        <Login>

        </Login>
        
        <Book>

        </Book>
        <Footer>

        </Footer>
      </div>
    );
  }
}

export default App;

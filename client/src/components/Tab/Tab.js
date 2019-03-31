import React from "react";
import { Input, Button, Definition } from "../Resources"
import '../../App.css';
import Radium from 'radium'

const axios = require('axios')

const tabStyle = {
  backgroundColor: 'rgb(11, 56, 2)',
  borderRadius: '8px',
  textAlign: 'center',
  height: '250px',
  width: '300px',
  color: 'white',
  fontSize: '15px',
  position: 'aboslute',
  position: 'static',
  zIndex: '10',
  marginLeft: '10px',
}

const defStyle = {
  backgroundColor: 'rgb(11, 56, 2)',
  borderRadius: '8px',
  width: '500px',
  textAlign: 'left',
  position: 'aboslute',
  position: 'static',
  zIndex: '10',
  marginTop: '50px',
}


class Tab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: " ",
      definitions: []
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.searchWord = this.searchWord.bind(this);
    // this.provideDeff = this.provideDeff.bind(this)
  }


  searchWord = () =>{
    if (this.state.searchTerm) {
    let word = this.state.searchTerm.toLocaleLowerCase()
      axios.get('https://www.dictionaryapi.com/api/v3/references/collegiate/json/' + word + '?key=' + process.env.REACT_APP_DICTIONARY_API_KEY)
        .then(response => {
            if (!response.data[0].shortdef) {
              let misspells = []
              response.data.map((words => (
                misspells.push(" " + words)
              )))
              alert(this.state.searchTerm + " is not a word or it may be spelled incorrectly. Did you mean: " + misspells + "?")
              console.log(response.data)
            } else if (response.data[0].meta.offensive === true) {
              alert("Please don't search naughty words :)")
            } else {
                let deffs = []

                response.data[0].shortdef.map((res => (
                    deffs.push(res)
                  )))

                  this.setState({
                    definitions: deffs
                  })
              }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        }) 
  }
}


  handleSearchChange = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }
  render() {
  return (
    <div className="col-md-4" style={tabStyle}>
      <h1>Search for a definition</h1>
      <form>
          <Input
            value={this.state.searchTerm}
            onChange={this.handleSearchChange}
            />
      </form>

      <Button onClick={
                      this.searchWord
                      }>
      Search
      </Button>
      <div style={defStyle}>
      <Definition words={this.state.definitions}></Definition>
      </div>
      </div>
  );
}
}

export default Radium(Tab)
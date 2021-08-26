import React from "react";
import "./App.css";
import Header from "./../Header/Header";
import SearchBox from "../SearchBox/SearchBox";
import ResultsContainer from "../ResultsContainer/ResultsContainer";

// name suggestion app dependencies 

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    
  state = {
    headerText: "Hellow World",
    headerExpanded:true,
    suggestedNames: [],
  };

  handleInputChange = (inputText) => {
    name(inputText);
    this.setState({headerExpanded:inputText.length > 0 ? false : true , suggestedNames: name(inputText),});
  }

  render() {
    console.log(name('cloud'));
    return (
      <div>
        <Header headerExpanded={this.state.headerExpanded} headingTitle="Name It!" />
        <SearchBox onInputChange={this.handleInputChange} />  
        <ResultsContainer suggestedNames = {this.state.suggestedNames} />  
      </div>
    );
  }
}

export default App;

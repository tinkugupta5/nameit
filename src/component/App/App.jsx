import React from "react";
import "./App.css";
import Header from "./../Header/Header";
import SearchBox from "../SearchBox/SearchBox";


class App extends React.Component {
    
  state = {
    headerText: "Hellow World",
  };

  render() {
    return (
      <div>
        <Header headingTitle="Name It!" />
        <SearchBox/>
        
      </div>
    );
  }
}

export default App;

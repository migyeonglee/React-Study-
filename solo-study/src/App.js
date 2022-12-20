import React, { Component } from 'react'
import './App.css';
import BoolComponent from './BoolComponent';
class App extends Component {
  render() {
   
    return (
      <div className="body">
        <h1>Boolean</h1>
        <div><b>지루할 때 : </b><BoolComponent bored/></div>
        <div><b>즐거울 때 : </b><BoolComponent /></div>  
        
      </div>
    )
  }
}
export default App;
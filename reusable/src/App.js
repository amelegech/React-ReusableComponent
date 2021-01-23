import React from 'react';
import './App.css';
import Button from './Components/Button';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      name:""
    }
  }
  nameHandler=()=>{
    this.setState({...this.state, name:"Amele"})
  }
  render(){
  return (
    <div className="App">
      <h1>Reusable component is one of the basic feature of react</h1>
      <Button clickabel={this.nameHandler}/> 
      Button Use 1:{this.state.name}
    </div>
  );
  }
}

export default App;

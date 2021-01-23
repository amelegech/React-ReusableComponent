import React from "react";
import "./App.css";
import Button from "./Components/Button";
import Counter from "./Components/Counter";
import Input from "./Components/Input";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  nameHandler = () => {
    this.setState({ ...this.state, name: "Amele" });
  };
  render() {
    return (
      <div className="App">
        <h1>Reusable component is one of the basic feature of react</h1>
        <Button
          clickabel={this.nameHandler}
          color="green"
          btnName="Click Here"
        />
        Button Use 1:{this.state.name}
        <Button color="blue" size="40px" nameB="Click" />
        <p>Use-Case 2:</p>
       
        <Input type="text" placeholder="Enter Name" />
        <Input type="password" placeholder="Password" />
        <Counter />
      </div>
    );
  }
}

export default App;

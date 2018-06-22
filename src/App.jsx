import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import OutputBox from './output-box';
import Buttons from './buttons';


class App extends Component {

  state = {
    output_box_data: ''
  }

  handleButtonClick = (event) => {
    let button_value = event.target.value;
    let output_box_data = this.state.output_box_data.toString();

    if (button_value === '=') {
      console.log('Hello');

      if (isNaN(output_box_data.charAt(output_box_data.length - 1))) {
        console.log('Invalid Equation');
      }
      else {
        let answer = '';
        answer = eval(output_box_data);
        if (answer != undefined)
          output_box_data = answer;
        this.setState({
          output_box_data
        })
      }
    }

    else if (button_value === 'AC') {
      output_box_data = "";
      this.setState({
        output_box_data
      })
    }

    else if (button_value === 'C') {
      output_box_data = output_box_data.slice(0, (output_box_data.length - 1));
      this.setState({
        output_box_data
      })
    }

    else {

      if (isNaN(output_box_data.charAt(output_box_data.length - 1)) && isNaN(button_value)) {
        console.log('Invalid Equation');
      }
      else {

        if (button_value === ".") {
          if (output_box_data.includes(".") === false)
            output_box_data = output_box_data + button_value;
        }
        else
          output_box_data = output_box_data + button_value;
        this.setState({
          output_box_data
        })
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div>
          <OutputBox data={this.state.output_box_data} />
          <Buttons handleButtonClick={this.handleButtonClick} />
        </div>

      </div>
    );
  }
}

export default App;

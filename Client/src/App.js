import React, { Component } from "react";
import getWeb3 from "./getWeb3";
import "./App.css";
import Tables from "./Table";
import { Form, Button } from "react-bootstrap/";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">A simple voting app</div>
        <p> Simple etherum voting daap </p>
        <div className="table">
          <Tables />
        </div>
        <div className="button">
          <Form>
            <label>
              {" Vote The Best Candidate For You:   "}
              <input type="text" />{" "}
              <input type="submit" value="Vote" color="blue" />
            </label>
            <br />
            <br />
            <div className="display">
              <Button variant="primary">Total Voters</Button>
              {" :"}
              <br />
              <br />
              <Button variant="primary">Total Votes</Button> :
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
export default App;

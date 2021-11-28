import "./App.css";
import axios from "axios";
import { Component } from "react";

class App extends Component {
  state = { len: 0 };

  // constructor(props){
  //   super(props);
  //   this.getLen(); --> this issue a warning
  // }

  getLen = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    axios
      .get(url)
      .then((res) => {
        this.setState({ len: res.data.length });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  componentDidMount(){
    this.getLen();
  }

  render() {
    return (
      <div className="App">
        <p>length : {this.state.len}</p>
      </div>
    );
  }
}

export default App;

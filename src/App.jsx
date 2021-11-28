import './App.css'
import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  state = {len : 0}

  // warning
  // constructor(props){
  //   super(props);
  //   this.getPosts();
  // }

  getPosts(){
    const url = 'https://jsonplaceholder.typicode.com/posts'
    axios.get(url).then(res=>{
      this.setState({len:res.data.length})
    }).catch(err=>{
      console.error(err);
    })
  }

  componentDidMount(){
    this.getPosts();
  }

  render() {
    return (
      <p>len is {this.state.len}</p>
    );
  }
}


export default App

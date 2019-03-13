import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import "./Show.css";

const url = " https://classbank.herokuapp.com/lesson/";

class Show extends Component {
  constructor(){
    super()
    this.state = {
      lesson: {}
    }
}

componentDidMount() {
  axios.get(url + this.props.match.params.id)
  .then(lesson => {
    this.setState({ lesson: lesson.data})
  })
  .catch(err => {
    console.log(err);
  })
}
  render() {
    // console.log(this.state.lesson);
    return <div>
      <h1>{this.state.lesson.title}</h1>
      <h3>{this.state.lesson.date}</h3>
      <h3>{this.state.lesson.instructor}</h3>
      <p>{this.state.lesson.objective}</p>
      <Link to=''>{this.state.lesson.url}</Link>
    </div>;
  }
}

export default Show;

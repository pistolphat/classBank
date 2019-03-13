import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Home.css";

const url = "https://classbank.herokuapp.com/lesson";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      lessons: []
    };
  }

  componentDidMount() {
    axios
      .get(url)
      .then(res => {
        this.setState({ lessons: res.data });
      })
      // .then(console.log(this.state.lessons))
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    let lessons = this.state.lessons.map(lesson => {
      return (
        <div className="lesson-container" key={lesson._id}>
          <Link to={lesson._id} />
          <h1>{lesson.title}</h1>
          <h3>{lesson.date}</h3>
          <h3>{lesson.instructor}</h3>
        </div>
      );
    });

    console.log(this.state.lessons);
    return <div>{lessons}</div>;
  }
}

export default Home;

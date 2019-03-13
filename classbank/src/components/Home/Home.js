import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Home.css";

const url = "https://classbank.herokuapp.com/lesson/";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      lessons: [],
      search: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState({search: e.target.value}, () => {
      if (this.state.search == '') {
        this.setState({search: ' '})
      } else {
        this.setState({search: this.state.search})
      }
    })
    // let { value } = e.target
    // let { lessons } = this.state

    // lessons.forEach((lesson, index) => {

    // let eachLesson = lesson.title.toLowerCase()

    // if(eachLesson.includes(value)) {
    //   this.setState((currentState) => {
    //     currentState.lessons[index].title = true
    //   })
    // } else {
    //   this.setState((currentState) => {
    //     currentState.lessons[index].title = false
    //   })
    // }
    // })
    // this.setState ({ search: value})
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
          <Link to={`/lesson/${lesson._id}`}>
            <h1>{lesson.title}</h1></Link>
            <h3>Date: {lesson.date}</h3>
            <h3>Instructor: {lesson.instructor}</h3>
        </div>
      );
    });

    // console.log(this.state.lessons);
    return <div>
      <h1>Classbank</h1>
    {/* <input type='text' name='search' value = {this.state.search} onChange={this.handleChange} placeholder='Search your lesson'></input> */}
    <input type='text' name={this.state.search} onChange={this.handleChange} placeholder='Search your lessons.'></input>

    {lessons}</div>;
  }
}

export default Home;

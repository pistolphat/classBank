import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Search from "../../components/Search/Search";

import "./Home.css";

const url = "https://classbank.herokuapp.com/lesson/";


function searchFor(search){
  return function(x){
    return x.title.toLowerCase().includes(search.toLowerCase()) || !search;
  }
}

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lessons: [],
      // lessons,
      search: ""
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    // console.log('Did mount');
    axios
      .get(url)
      .then(res => {
        let lessons = res.data
        this.setState({ lessons: lessons})
        // console.log(lessons);
      })
      .catch(err => {
        console.log(err);
      })

  }

  handleSearch(e) {
    this.setState({ search: e.target.value})
  }

  render() {
    // console.log(this.state.lessons)
    let lessons = this.state.lessons.filter(searchFor(this.state.search)).map(lesson => {
     
      return (
        <div className="lesson-card" key={lesson._id}>
          <Link to={`/lesson/${lesson._id}`}>
          <h4>{lesson.title}</h4></Link>
          <p><strong>Date:</strong> {lesson.date}</p>
          <p><strong>Instructor:</strong> {lesson.instructor}</p>
        </div>
 
      );
    });
    
    return (
      <div>
        <Search search={this.state.search} handleSearch={this.handleSearch} />
        {lessons}
      </div>
    );
  }
}

export default Home;
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Search from "../../components/Search/Search";

import "./Home.css";

const url = "https://classbank.herokuapp.com/lesson/";

const lessons = [
  {
    _id: "5c86fd39931644000430b7f5",
    date: "Dec 21",
    title: "JS and the DOM",
    objective: "What is the DOM? Explore DOM manipulation.",
    instructor: "Jimmy",
    url: "https://git.generalassemb.ly/dc-wdi-fundamentals/js-dom"
  },
  {
    _id: "5c86fd39931644000430b7f6",
    date: "Jan 22",
    title: "Express Authentication",
    objective: "Local Authentication with Express and Passport.",
    instructor: "Jimmy",
    url: "https://git.generalassemb.ly/dc-wdi-node-express/express-passport"
  },
  {
    _id: "5c86fd39931644000430b7f7",
    date: "Jan 24",
    title: "express-mongoose-mlab-deploy",
    objective: "Deployment with MLABS and Heroku.",
    instructor: "Jimmy and Erin",
    url:
      "https://git.generalassemb.ly/dc-wdi-node-express/express-mongoose-mlab-deploy"
  },
  {
    _id: "5c86fd39931644000430b7f8",
    date: "Jan 2",
    title: "Parcel and Boostrap",
    objective: "Learn how to use and build with Bootstrap framework.",
    instructor: "Jimmy",
    url: "https://git.generalassemb.ly/dc-wdi-node-express/mehn-lab"
  },
  {
    _id: "5c86fd39931644000430b7f9",
    date: "Jan 18",
    title: "Lab: MEHN",
    objective: "Pair programming utilizing MEHN stack.",
    instructor: "Erin",
    url: "https://git.generalassemb.ly/dc-wdi-node-express/mehn-lab"
  },
  {
    _id: "5c86fd39931644000430b7fa",
    date: "Jan 22",
    title: "Express Authentication",
    objective: "Local Authentication with Express and Passport.",
    instructor: "Jimmy",
    url: "https://git.generalassemb.ly/dc-wdi-node-express/express-passport"
  },
  {
    _id: "5c86fd39931644000430b7fb",
    date: "Feb 4",
    title: "Intro to React & Components",
    objective:
      "Explain what is ReactJS and how does components fit into the modern model of web development.",
    instructor: "Erin",
    url: "https://git.generalassemb.ly/dc-wdi-react-redux/react-intro"
  },
  {
    _id: "5c86fd39931644000430b7fc",
    date: "Feb 28",
    title: "Intro to SQL.",
    objective:
      "Learning about new database format, SQL. Using PostgreSQL and more.",
    instructor: "Erin",
    url: "https://git.generalassemb.ly/dc-wdi-python-django/sql-intro"
  }
];

// console.log(lessons[0].title);
class Home extends Component {
  constructor() {
    super();

    this.state = {
      // lessons: [],
      lessons,
      search: ""
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    axios
      .get(url)
      .then(res => {
        this.setState({ lessons: res.data });
      })
      .catch(err => {
        console.log(err);
      })

  }

  handleSearch(e) {
    //! Holding off for now
  }

  render() {
    let lessons = this.state.lessons.map(lesson => {
      // (console.log(this.state.lessons))
      return (
        <div className="lesson-container" key={lesson._id}>
          <Link to={`/lesson/${lesson._id}`}>
            <h1>{lesson.title}</h1>
          </Link>
          <h3>Date: {lesson.date}</h3>
          <h3>Instructor: {lesson.instructor}</h3>
        </div>
      );
    });

    // console.log(this.state.lessons);
    return (
      <div>
        <Search handleSearch={this.handleSearch} />
        {/* <input type='text' name='search' value = {this.state.search} onChange={this.handleSearch} placeholder='Search your lesson'></input> */}
        {/* <input type='text' name={this.state.search} onSearchhandleSearch={this.handleSearch} placeholder='Search your lessons.'></input> */}
        {lessons}
      </div>
    );
  }
}

export default Home;

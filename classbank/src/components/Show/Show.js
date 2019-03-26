import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Show.css";

const url = " https://classbank.herokuapp.com/lesson/";

class Show extends Component {
  
  constructor() {
    super();
    this.state = {
      lesson: {}
    };
  }

  componentDidMount() {
    axios
      .get(url + this.props.match.params.id)
      .then(lesson => {
        this.setState({ lesson: lesson.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="showcontainer d-block">
        <div className="card" style={{ width: "500px", height: "350px" }}>
          <div className="card-body showbox">
            <h3 className="card-title">{this.state.lesson.title}</h3>
            <p className="card-text">
              <strong>Date: </strong>
              {this.state.lesson.date}
            </p>
            <p className="card-text">
              <strong>Instructor: </strong>
              {this.state.lesson.instructor}
            </p>
            <p className="card-text">
              <strong>Objective: </strong>
              {this.state.lesson.objective}
            </p>
            <a className='link-to'target='_blank' href={this.state.lesson.url} rel="noopener noreferrer">{this.state.lesson.url}</a>
            {/* <Link className='link-to' target='_blank' to='#'>{this.state.lesson.url}</Link> <br /> */}
            <Link to='/'><button type="button" className="btn btn-primary mt-3">Go back</button></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;

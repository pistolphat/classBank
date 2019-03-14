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
    return <div className='container-fluid'>
    
        <div className="card mb-3" style={{maxWidth: "750px", marginTop: "10px"}}>
          {/* <div className="row no-gutters">
            <div className="col-md-8"> */}
              <div className="card-body">
                <h3 className="card-title">{this.state.lesson.title}</h3>
                <p className="card-text"><strong>Date: </strong>{this.state.lesson.date}</p>
                <p className="card-text"><strong>Instructor: </strong>{this.state.lesson.instructor}</p>
                <p className="card-text"><strong>Objective: </strong>{this.state.lesson.objective}</p>
                <Link to='#'>{this.state.lesson.url}</Link>
              </div>
            </div>
          {/* </div>
        </div> */}
    </div>;
  }
}

{/* <h1>{this.state.lesson.title}</h1>
      <p><strong>Date: </strong>{this.state.lesson.date}</p>
      <p><strong>Instructor: </strong>{this.state.lesson.instructor}</p>
      <p><strong>Objective: </strong>{this.state.lesson.objective}</p>
      <Link to=''>{this.state.lesson.url}</Link> */}

export default Show;

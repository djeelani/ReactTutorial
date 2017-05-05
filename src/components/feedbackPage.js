import React, { Component } from 'react';

class Feedback extends Component {

  constructor(props) {
    super(props);
    this.state = { author: '', text: '' };
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('Thank you!!! ' + this.state.author);
    event.preventDefault();
  }
  // getInitialState() {
  //   return {author: '', text: ''};
  // }
  handleAuthorChange(e) {
    this.setState({ author: e.target.value });
  }
  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Your name: </label>
              <input type="text" className="form-control" placeholder="Your name" value={this.state.author} onChange={this.handleAuthorChange} /><br/>
            </div>
            <div className="form-group">
              <label>Comment: </label>
              <textarea type="text" className="form-control"  placeholder="Say something..." value={this.state.text} onChange={this.handleTextChange } rows="5" id="comment" /><br/>
            </div>
            <div className="form-group">
              <label>
                Please select: &nbsp; &nbsp; &nbsp;
                <select value={this.state.value} className="form-control" onChange={this.handleChange}>
                  <option value="grapefruit">Suggestion</option>
                  <option value="lime">Complaint</option>
                  <option value="coconut">Improvisation</option>
                </select>
              </label><br/>
            </div>
            <input type="submit" className="btn btn-default" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Feedback;
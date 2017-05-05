import React, { Component } from 'react';

//  import AuthorApi from '../api/authorApi'; 

class Authors extends Component {

  // getInitialState(){
  //   return{
  //     authors:[]
  //   };
  // }
  constructor(props) {
    super(props);
    this.state = {
      authors: [{
        id: 'cory-house',
        firstName: 'Cory',
        lastName: 'House'
      },
        {
          id: 'scott-allen',
          firstName: 'Scott',
          lastName: 'Allen'
        },
        {
          id: 'dan-wahlin',
          firstName: 'Dan',
          lastName: 'Wahlin'
        }]
    };
  }
  componentWillMount() {
    // this.setState({authors: AuthorApi.getAllAuthors});
  }

  render() {
    var createAuthorRow = function (author) {
      return (
        <tr key={author.id}>
          <td><a href={"/#authors"}>{author.id}</a></td>
          <td>{author.firstName}&nbsp; {author.lastName}</td>
        </tr>
      );
    }
    return (
      <div className="container">
        <div className="jumbotron">
          <h2>Authors</h2>
          <table className='table'>
            <thead>
              <th>&nbsp; ID</th>
              <th>&nbsp; Name</th>
            </thead>
            <tbody>
              {this.state.authors.map(author => createAuthorRow(author)) }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Authors;
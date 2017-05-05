import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/homePage';
import About from './components/about';
import Header from './components/common/header';
import Authors from './components/authorPage';
import Feedback from './components/feedbackPage';

class Apps extends Component {
  render() {
    var Child;
    switch (this.props.route) {
      case 'about': Child = About; break;
      case 'authors': Child = Authors; break;
      case 'feedback': Child = Feedback; break;
      default: Child = Home;
    }
    return (
      <div>
        <Header/>
        <Child/>
      </div>
    );

  }

};

function render() {
  var route = window.location.hash.substr(1);
  console.log("--->" + route);
  ReactDOM.render(<Apps route={route}/>, document.getElementById('root'));
}

window.addEventListener('hashchange', render);
render();
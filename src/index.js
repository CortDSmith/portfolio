import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Home from './components/home-page';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentpage: <Home />
    };
  }

  componentWillMount() {}
  componentWillUnmount() {}

  setCurrentPage(props) {
    this.setState({currentpage: props});
  }

  render() {
    return (
      <div id="root">
        <div id="nav-bar">
          <div id="comment" name="This is a navigation bar that will host all the buttons to move between pages."></div>
          <div id="comment" name="The nav bar will remain static throughout the pages of the webapp."></div>
          <button onClick={this.setCurrentPage(<Home />)}>Home</button>
        </div>
        <div id="comment" name="Below will be the remaining page that will update when the buttons are pressed."></div>
        {this.state.currentpage}
      </div>
    );
  }
}



ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

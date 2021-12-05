import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { Home, About, Projects, Contact, Feedback } from './Page';

import { text, header } from './Components/Pure/pure-text-component';

class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: <Home />,
    };
  }

  componentWillMount() {}
  componentWillUnmount() {}

  render() {
      React.createElement(
          div,
          {className: 'main'},
          [
              React.createElement(
                div,
                {className: 'second'},
                <p>Hello, World</p>
            )
          ]
      )
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

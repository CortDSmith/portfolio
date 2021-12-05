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

    return (
      <div class="main">
        <body>
          <nav class="header">
            <div class="header-menu">
              <div class="header-logo">
                <ul>
                  <a href="#" name="logo"></a>
                  <ul class="header-social-media">
                    <li><a href="#" name="Github"><div class="github" title="https://github.com/CortDSmith"></div></a></li>
                    <li><a href="#" name="LinkedIn"><div class="linkedin" title="https://www.linkedin.com/in/cort-smith-3a833915a/"></div></a></li>
                    <li><a href="#" name="Twitter"><div class="twitter"></div></a></li>
                  </ul>
                </ul>
              </div>
              <ul>
              <li class="header-tabs"><a href="#" onClick={() => {this.setState({body: <Home />})}}>Home</a></li>
              <li class="header-tabs"><a href="#" onClick={() => {this.setState({body: <About />})}}>About</a></li>
              <li class="header-tabs"><a href="#" onClick={() => {this.setState({body: <Projects />})}}>Projects</a></li>
              <li class="header-tabs"><a href="#" onClick={() => {this.setState({body: <Contact />})}}>Contact</a></li>
              <li class="header-tabs"><a href="#" onClick={() => {this.setState({body: <Feedback />})}}>Feedback</a></li>
              </ul>
            </div>
          </nav>
          {this.state.body}
        </body>
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

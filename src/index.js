import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { Home, About, Projects, Contact, Feedback } from './Page';

import Tooltip from './Tooltip';

/* Text component that splits text onto multiple lines
by including \n to the text where the new line will begin. */
const Text = (props) => {
  const text = props.text;
  const textsplit = text.split('\n');
  const textmap = textsplit.map(str => <p>{str}</p>);
  return (textmap);
}

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
              <div class="header-logo" style={{
	      	
	      }}>
                <ul>
                  <a href="#" name="logo"></a>
                  <ul style={{position:'relative'}} class="header-social-media">
                    <li style={{}}><a href="#" name="Github"><div class="github" title="https://github.com/CortDSmith"></div></a></li>
                    <li style={{}} ><a href="#" name="LinkedIn"><div class="linkedin" title="https://www.linkedin.com/in/cort-smith-3a833915a/"></div></a></li>
                    <li style={{}} ><a href="#" name="Twitter"><div class="twitter"></div></a></li>
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

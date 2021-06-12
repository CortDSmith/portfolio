import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Header from './Page';

const Text = (props) => {
  const text = props.text;
  const textsplit = text.split('\n');
  const textmap = textsplit.map(str => <p>{str}</p>);
  return (textmap);
}

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <div>
        <body>
          <nav>
            <div class="menu">
              <div class="logo">
                <ul>
                  <a href="#"></a>
                  <ul class="social-media">
                    <li><a href="https://github.com/CortDSmith" name="Github">
                        <img class="github"></img>
                    </a></li>
                    <li><a href="https://www.linkedin.com/in/cort-smith-3a833915a/" name="LinkedIn">
                        <img class="linkedin"></img>
                    </a></li>
                    <li><a href="#" name="">
                      <img class="twitter"/>
                    </a></li>
                  </ul>
                </ul>
              </div>
              <ul>
                <li class="tabs"><a href="#">Home</a></li>
                <li class="tabs"><a href="#">About</a></li>
                <li class="tabs"><a href="#">Projects</a></li>
                <li class="tabs"><a href="#">Contact</a></li>
                <li class="tabs"><a href="#">Feedback</a></li>
              </ul>
            </div>
          </nav>
          <div class="img"></div>
          <div class="center">
            <div class="title">Cort Smith</div>
            <div class="sub_title">Software & Game Developer</div>
            <div class="quote">"Give everything or give nothing. There is no inbetween."</div>
            <div class="intro">
              Motivated software/game developer looking for opportunities where my skills can contribute to the success of the team. Versed in many technologies around 3D experience and a novice ML engineer.
            </div>
          </div>
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

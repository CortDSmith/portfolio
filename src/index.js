import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


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
        <head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title> Website Layout | CodingLab</title>
          <link rel="stylesheet" href="style.css"/>
        </head>
        <body>
          <nav>
            <div class="menu">
              <div class="logo">
                <a href="#">My Portfolio Test Logo</a>
              </div>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Feedback</a></li>
              </ul>
            </div>
          </nav>
          <div class="img"></div>
          <div class="social-media">
            <ul>
              <li><a href="#" name="LinkedIn"></a></li>
              <li><a href="#" name="Github"></a></li>
              <li><a href="#" name=""></a></li>
            </ul>
          </div>
          <div class="center">
            <div class="title">Cort Smith</div>
            <div class="sub_title">Software & Game Developer</div>
            <div class="quote">"Give everything or nothing. There is no inbetween."</div>
            <div class="intro">Aspiring software and game developer.</div>
            <div class="intro-cont">I've applied my knowledge on contract with Ricoh and the Gaming industry</div>
            <div class="intro-cont">within my coworkers game studio.</div>
            
            <div class="btns">
              <button>Learn More</button>
              <button>Subscribe</button>
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

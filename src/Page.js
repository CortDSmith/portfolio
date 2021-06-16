import React from 'react';
import './Page.css';
import Tooltip from './Tooltip';


const Home = () => {
    let title = "Cort Smith";
    let subtitle = "Software & Game Developer";
    let quote = "Give everything or give nothing. There is no inbetween.";
    let intro = "Motivated software/game developer looking for opportunities where my skills can contribute to the success of the team. Versed in many technologies around 3D experience and a novice ML engineer.";
    return (
      <div class="home">
        <div class="home-bg">
          <div class="home-center">
            <div class="home-title">{title}</div>
            <div class="home-sub_title">{subtitle}</div>
            <div class="home-quote">{quote}</div>
            <div class="home-intro">{intro}</div>
          </div>
        </div>
      </div>
    );
  };

const About = () => {
    let intro = [<div>Hi, my name is Cort. I've developing my skills as a software engineer</div>, 
                <div>over the past 6 years.Hi, my name is Cort. I've developing my skills as a</div>,
                <div>software engineer over the past 6 years.Hi, my name is Cort. I've developing</div>,
                <div>my skills as a software engineer over the past 6 years.Hi, my name is Cort.</div>,
                <div>I've developing my skills as a software engineer over the past 6 years.</div>];

    return (
        <div class="about">
            <div class="about-bg">
                <div class='about-center'>
                    <div class='about-intro'>
                        Hello, World!
                    </div>
                    <div class="icon-text-box">
                        <Tooltip />
                    </div>
                </div>
            </div>
        </div>
    );
}

const Projects = () => {
    return (
        <div class="projects">

        </div>
    );
}

const Contact = () => {
    return (
        <div class="contact">

        </div>
    );
}

const Feedback = () => {
    return (
        <div class="feedback">

        </div>
    );
}



export { Home, About, Projects, Contact, Feedback };
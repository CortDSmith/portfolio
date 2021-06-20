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
                    <div class='tooltip' style={{left: 250, top: 75}}>
                        <img id='tooltip-1' src='/assets/images/circle-icon.png'></img>
                        <div id='tooltip-1-textbox'>
                            <nav id='tooltip-1-text'>
                                Hi my name is cort smith and I am a programmer. I've been working with c++ and python
                                for the past 6 years, developing scripts and software.
                            </nav>
                        </div>
                    </div>
                    <div class='tooltip' style={{left: 850, top: 275}}>
                        <img id='tooltip-2' src='/assets/images/circle-icon.png'></img>
                        <div id='tooltip-2-textbox'>
                            <nav id='tooltip-2-text'>
                                Python and C++ are my expertise. Working with Python, I developed scripts in Blender for rendering images on Amazon EC2 Web Service using Amazon S3 to store the images during render runtime.
                                And C++ I've worked with Unreal Engine source code as well as my own scripts for creating gameplay mechanics and player controls.
                            </nav>
                        </div>
                    </div>
                    <div class='tooltip' style={{left: 450, top: 400}}>
                        <img id='tooltip-3' src='/assets/images/circle-icon.png'></img>
                        <div id='tooltip-3-textbox'>
                            <nav id='tooltip-3-text'>
                                Since moving, I never finished college, however, I am pursuing my degree through Starbucks' college program with ASU.
                            </nav>
                        </div>
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
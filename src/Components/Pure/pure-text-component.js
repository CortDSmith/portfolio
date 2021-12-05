import React from 'react';

const Text = (props) => {
    const text = props.text;
    const textsplit = text.split('\n');
    const textmap = textsplit.map(str => <p>{str}</p>);
    return (textmap);
}

const Header = (props) => {
    let github = "https://github.com/CortDSmith";
    let linkedin = "https://www.linkedin.com/in/cort-smith-3a833915a/";
    let twitter = "#";
  
    // home onClick={()=>this.setState({body: this.page.homepage})}
    // about onClick={()=>this.setState({body: this.page.aboutpage})}
  
    /*
        <li class='tabs'><a href="#" onClick={() => {return (<Home />)}}>Home</a></li>
        <li class="tabs"><a href="#" onClick={() => {return (<About />)}}>About</a></li>
        <li class="tabs"><a href="#" onClick={() => {return (<Project />)}}>Project</a></li>
        <li class="tabs"><a href="#" onClick={() => {return (<Contact />)}}>Contact</a></li>
        <li class="tabs"><a href="#" onClick={() => {return (<Feedback />)}}>Feedback</a></li>
    */
  
    return (
        <div class="header">
            
        </div>
    );
}

export { Text, Header };
import React from 'react';
import './home-page.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

        this.images = {
            background: "",
            projects: [""]
        }
    }

    componentDidMount() {}
    componentWillUnmount() {}

    render() {
        return (
            <div id="home-root" background={this.images.background}>

            </div>
        );
    }
}

export default Home;
import React from 'react';
import './Tooltip.css';


class Tooltip extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            x: 0,
            y: 0,
            img: '/assets/images/circle-icon.png',
            text: 'Hello, World!'
        };

        if (props.x) {this.setState({x: props.x})};
        if (props.y) {this.setState({x: props.y})};
        if (props.img) {this.setState({x: props.img})};
        if (props.text) {this.setState({x: props.text})};
    }

    render() {
        return (
            <div class='tooltip'>
                <img id='icon' src={this.state.img}>
                    <p>
                        {this.state.text}
                    </p>
                </img>
            </div>
        );
    }
}

export default Tooltip;
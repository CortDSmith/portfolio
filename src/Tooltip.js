import React from 'react';
import './Tooltip.css';


class Tooltip extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div class='tooltip'>
                <img class='icon' src='/assets/images/circle-icon.png'></img>
                <nav className='scrollview'>
                    <p class='text'>
                        Hello, World!
                    </p>
                </nav>
            </div>
        );
    }
}

export default Tooltip
import React from 'react'
import './Button.css';

// Lists of potential classes to be inserted into the returned button.
// This includes a class that affects the style of the button.
const STYLES = ['btn--primary', 'btn--outline'];
// This includes a class that affects the dimensions of the button. e.g. height, width, etc...
const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];
// This includes a class that affects the colors of the button. e.g. hover color, base color, background-color, etc...
const COLORS = ['primary', 'blue', 'red', 'green'];

// Then we export our Button component that accepts arguments, and calls a function that returns a <button></button>
//      with the desired class values implemented. And depending on the values you can get a customized pre-styled button.
// We use the Button.css file to determine how each class is styled for our button.
export const Button = ({ 
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize, 
    buttonColor 
}) => {
    // These ternary checks return the proper class values before adding them to the button component.
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    const checkButtonColor = COLORS.includes(buttonColor) ? buttonColor : COLORS[0];
    // Here we return the button with all of the requested customizations implemented.
    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} 
                onClick={onClick} 
                type={type}>
            {children}
        </button>
    );
};

import React from "react";
//   props being used are value and onClick
const Square = ({value, onClick}) => {
    // style is my CSS component. Squares is a CSS class I'm declaring.
    // If value is null, it will pass the CSS class for squares. If value is X or O, it will pass the CSS class for that.
    const style = value ? `squares ${value}` : `squares`;

    return (
        // className is a prop native to react, which allows me to add CSS to a component (in this case my button)
        <button className="style" onClick={onClick}>
        {value} {/* value will be X or O */}
    </button>
    )
}

export default Square
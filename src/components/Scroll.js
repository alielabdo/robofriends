import React from "react";

const Scroll = (props) => {
    return (
        <div style={{ height: "500px", border: '3px solid black', overflowY: 'scroll' }}>
            {props.children}
        </div>
    );
};

export default Scroll;

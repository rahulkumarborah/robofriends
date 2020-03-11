import React from "react";

function Scroll(props){
    return (
        <div style={{"overflowX":"scroll", border:"1px solid black", height:"500px"}}>
            {props.children}
        </div>
    );
}

export default Scroll;
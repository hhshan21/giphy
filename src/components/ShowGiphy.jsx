import React from "react";
import "../components/ShowGiphy.css";

const ShowGiphy = (props) => {
    return (
        <div className="gif">
            <img src={props.gif} alt=""></img>
        </div>
    );
};

export default ShowGiphy;

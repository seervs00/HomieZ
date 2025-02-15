import React from "react";
import "./Contactbutton.css";
const Contactbutton = (props) => {
  return (
    <button className="button-default" onClick={props.onClick}>
      <div className="main-div  ">
        <div className="upper-div">
          <div className="image-logo">
            <div  className="svg-class">
                 {props.svg}
            
            </div>
          </div>
          <div className="detail-div">
            <div className="main-action">{props.main}</div>
            <div className="dispatch"> {props.dispatch }</div>
          </div>
        </div>

        <div className="button-here">{props.custom}</div>
      </div>
    </button>
  );
};

export default Contactbutton;

import React from "react";

const AddCoursePopup = props => {
  console.log(props.content)

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};

export default AddCoursePopup;
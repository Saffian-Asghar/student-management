import React from "react";

const AddStudentPopup = props => {
  console.log(props.content)
  
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {/* todo: add x for cleaning placeholder */}
        {props.content}
      </div>
    </div>
  );
};

export default AddStudentPopup;
import React from "react";

const AddStudentPopup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};

export default AddStudentPopup;

// import * as React from 'react';
// import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
// import { styled } from '@mui/system';

// export default function AddAStudent() {
//   const [anchor, setAnchor] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchor(anchor ? null : event.currentTarget);
//   };

//   const open = Boolean(anchor);
//   const id = open ? 'simple-popup' : undefined;

//   return (
//     <div>
//       <Button aria-describedby={id} type="button" onClick={handleClick}>
//         Toggle Popup
//       </Button>
//       <BasePopup id={id} open={open} anchor={anchor}>
//         <PopupBody>The content of the Popup.</PopupBody>
//       </BasePopup>
//     </div>
//   );
// }
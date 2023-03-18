import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "../css/Modal.module.css";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick = {props.onClose}/>;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const overlayPotal = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop onClose = {props.onClose}/>, overlayPotal)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlayPotal
      )}
    </Fragment>
  );
};

export default Modal;

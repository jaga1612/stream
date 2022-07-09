import React from "react";
import { createPortal } from "react-dom";

const Modal = (props) => {
  // console.log(props)
  return createPortal(
    <div
      onClick={() => {
        props.onClickCancel();
      }}
      className="modal"
      style={{ display: "block" }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal-dialog"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{props.tittle}</h5>
          </div>
          <div className="modal-body">
            <p>{props.body}</p>
          </div>
          <div className="modal-footer">
            <button
              onClick={() => {
                props.onClickCancel();
              }}
              type="button"
              className="btn btn-primary"
            >
              {props.firstButton}
            </button>
            <button
              onClick={() => {
                props.onclickOk();
              }}
              type="button"
              className="btn btn-danger"
            >
              {props.secondButton}
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;

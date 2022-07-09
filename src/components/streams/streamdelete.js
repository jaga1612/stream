import React from "react";
import Modal from "../Modal";
import { connect } from "react-redux";
import { deleteStream } from "../../Actions";
import history from "../../history";
// import ModalDemo from "../new";

const StreamDelete = (props) => {
  const onClickCancel = () => {
    history.push("/");
  };

  const onclickDelete = () => {
    props.deleteStream(props.match.params.id);
    // console.log('delete')
    // console.log(props.match.params.id)
  };


  return (
          <Modal
        onClickCancel={onClickCancel}
        onclickOk={onclickDelete}
        tittle={"Delete Stream"}
        body={"Are You Sure Want To Delete Stream?"}
        firstButton={"Cancel"}
        secondButton={"Delete"}
      />
      // <ModalDemo></ModalDemo>
      

  );
};

export default connect(null, { deleteStream })(StreamDelete);

import React from "react";
import {connect} from "react-redux";
import { createStream } from "../../Actions";
import CreateForm from "./createForm";


class StreamCreate extends React.Component {
  onSubmit=(formvalues)=> {
    // console.log(formvalues);
    this.props.createStream(formvalues)
  }

  render() {
    // console.log(this.props)
    return (
      <div>
      <h3>Create Stream</h3>
      <CreateForm createStream={this.onSubmit}/>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
return {Tittle:state.form.StreamCreate?.values?.Tittle,
Description:state.form.StreamCreate?.values?.Description}
}

export default connect(mapStateToProps,{createStream})(StreamCreate);
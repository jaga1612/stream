import React from "react";
import { connect } from "react-redux";
import { getStream, editStream } from "../../Actions";
import CreateForm from "./createForm";



class StreamEdit extends React.Component {

 componentDidMount(){
    this.props.getStream(this.props.match.params.id)
 }
 
 onSubmit=(formvalues)=>{
   //  console.log(formvalues)
            this.props.editStream(this.props.match.params.id,formvalues)
 }
    
 render(){
   //  console.log(this.props)
    if(this.props.stream){
  return (<div>
    <h3>Stream Edit</h3>
    <CreateForm createStream={this.onSubmit} initialValues={{Tittle:this.props.stream.Tittle,Description:this.props.stream.Description}}/>
  </div>);
    }
    else return <div>Loading...</div>
 }
}


const mapStateToProps=(state,ownProps)=>{
    return {stream: state.streams[ownProps.match.params.id],userId:state.auth.userId}
}

export default connect(mapStateToProps,{getStream,editStream})(StreamEdit);





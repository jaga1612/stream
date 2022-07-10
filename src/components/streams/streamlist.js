import React from "react";
import { connect } from "react-redux";
import { getStreams } from "../../Actions";
import { Link } from "react-router-dom";
// import history from "../../history";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.getStreams();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentuserId) {
      return (
        <div>
          <Link to={`/streams/edit/${stream.id}`} type="button" className="btn btn-primary btn-lg">
            Edit
          </Link>
          <Link to={`/streams/delete/${stream.id}`}type="button" className="btn btn-danger btn-lg">
            Delete
          </Link>
        </div>
      );
    } else return null;
  }

  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div className="container-fluid list-group-item" key={stream.id}>
          <div className="row">
            <i className="bi bi-cast col-md-auto"></i>
            <div className="col-md-auto">
              <Link className="fw-bold" to={`/streams/${stream.id}`}>{stream.Tittle}</Link>
              <p>{stream.Description}</p>
            </div>
            <div className="col-md-auto ms-auto">
              {this.renderAdmin(stream)}
            </div>
          </div>
        </div>
      );
    });
  }

  renderCreateStream(){

    if(this.props.isSignedIn){
        return (
            <div>
                <Link to="/streams/new" className="btn btn-primary btn-lg">Create Stream</Link>
            </div>
        )
    }
  }

  render() {
    // console.log(this.props);
    return (
      <div className="container-fluid">
        <div className="container-fliid list-group">{this.renderList()}</div>
        <br></br>
        {this.renderCreateStream()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentuserId: state.auth.userId,
    isSignedIn:state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, { getStreams: getStreams })(StreamList);

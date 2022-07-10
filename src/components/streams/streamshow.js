import React from "react";
import { getStream } from "../../Actions";
import { connect } from "react-redux";
import flv from "flv.js";

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    this.props.getStream(this.props.match.params.id);

    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  componentWillUnmount(){
    this.player.destroy()
  }

  buildPlayer() {
    if (this.player || !this.props.stream) {
      return;
    }

    const { id } = this.props.match.params;
    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
 
  }

  render() {
    console.log(this.videoRef);
    if (!this.props.stream) return <div>Loading....</div>;
    return (
      <div>
        <video
          ref={this.videoRef}
          style={{ width: "100%" }}
          controls={true}
        ></video>
        <h1>{this.props.stream.Tittle}</h1>
        <p>{this.props.stream.Description}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getStream })(StreamShow);

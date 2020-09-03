import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    console.log(location);
    if (location.state) {
      return (
        <div className="info__container">
          <div>
            <b>name</b>
          </div>
          <div>{location.state.name}</div>
          <div>
            <b>upload date</b>
          </div>
          <div>{location.state.updated}</div>
          <div>
            <b>bio</b>
          </div>
          <div>{location.state.bio}</div>
          <div>
            <b>portfolio</b>
          </div>
          <div>{location.state.portfolio}</div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;

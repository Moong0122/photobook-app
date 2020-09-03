import React from "react";
import PropTypes from "prop-types";
import "./Detail.css";

function Detail({ name, updated, bio, portfolio }){
  return (
    <div className="info__container">
      <div>
        <b>name</b>
      </div>
      <div>{name}</div>
      <div>
        <b>upload date</b>
      </div>
      <div>{updated}</div>
      <div>
        <b>bio</b>
      </div>
      <div>{bio}</div>
      <div>
        <b>portfolio</b>
      </div>
      <div>{portfolio}</div>
    </div>
  );
}

Detail.propTypes = {
	id: PropTypes.string.isRequired,
	updated: PropTypes.string.isRequired,
	// urls.regular
	image: PropTypes.string.isRequired,
	// user.username, .portfolio_url
	bio: PropTypes.string,
	name: PropTypes.string.isRequired,
	portfolio: PropTypes.string
};

export default Detail;

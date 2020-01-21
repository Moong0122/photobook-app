import React from "react";
import PropTypes from "prop-types";

function Photo({ key, id, updated, image, name, bio, portfolio }) {
  return (
    <div className="photo">
      <img src={image} alt={name} />
      <div className="photo__data">
        <h3 className="photo__title">{name}</h3>
        <h5 className="photo__year">{updated.slice(0, 10)}</h5>
        <h5 className="summary">{bio}</h5>
      </div>
    </div>
  );
}

Photo.propTypes = {
  id: PropTypes.string.isRequired,
  updated: PropTypes.string.isRequired,
  // urls.regular
  image: PropTypes.string.isRequired,
  // user.username, .portfolio_url
  name: PropTypes.string.isRequired,
  portfolio: PropTypes.string.isRequired
};

export default Photo;

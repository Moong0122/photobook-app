import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Photo.css";

function Photo({ id, updated, image, name, bio, portfolio }) {
  return (
    <div className="photo">
      <Link
        to={{
          pathname: `/photo/${id}`,
          state: { updated, name, bio, portfolio }
        }}
      >
        <img src={image} alt={name} />
      </Link>
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

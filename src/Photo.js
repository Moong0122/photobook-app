import React from "react";
import PropTypes from "prop-types";

function Photo({ id, udated, image, name, portfolio }) {
  return <h2> {name} </h2>;
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

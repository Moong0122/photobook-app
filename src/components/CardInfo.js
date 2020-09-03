import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSpring, animated as a } from 'react-spring';
import './CardInfo.css';

function CardInfo({id, updated, image, name, bio, portfolio}){
	return(
		<Link
			to={{
				pathname: `/photo/${id}`,
				state: { updated, name, bio, portfolio }
			}}
		>
		<img src={image} alt={name} />
	</Link>
	);
}
CardInfo.propTypes = {
	id: PropTypes.string.isRequired,
	updated: PropTypes.string.isRequired,
	// urls.regular
	image: PropTypes.string.isRequired,
	// user.username, .portfolio_url
	bio: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	portfolio: PropTypes.string.isRequired
  };

  export default CardInfo;
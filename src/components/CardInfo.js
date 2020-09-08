import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSpring, animated as a } from 'react-spring';
import './CardInfo.css';
import Detail from "./Detail";

function CardInfo({id, updated, image, name, bio, portfolio}){
	const [flipped, set] = useState(false);
	const { transform, opacity } = useSpring({
		opacity: flipped ? 1 : 0,
		transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
		config: { mass: 5, tension: 500, friction: 80 }
	});
	return(
		<div id="card_inner" onClick={()=> set(state => !state)}>
			<a.div className="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} >
				<img src={image} alt={name} />
			</a.div>
			<a.div className="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} >
				<div>
					<Detail 
						name= {name}
						id= {id}
						updated= {updated}
						bio= {bio}
						portfolio= {portfolio}
					/>
				</div>
			</a.div>
		</div>
		
	);
}

CardInfo.propTypes = {
	id: PropTypes.string.isRequired,
	updated: PropTypes.string.isRequired,
	// urls.regular
	image: PropTypes.string.isRequired,
	// user.username, .portfolio_url
	bio: PropTypes.string,
	name: PropTypes.string.isRequired,
	portfolio: PropTypes.string
  };

  export default CardInfo;
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useSpring, animated } from 'react-spring';
import "./Photo.css";

const calc = (x,y) => [-(y-window.innerHeight / 2) / 20, (x-window.innerWidth / 2) / 20, 1.1];
const trans = (x,y,s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Photo({ id, updated, image, name, bio, portfolio }) {
  const [props, set] = useSpring(() => ({xys : [0,0,1], config: {mass:5, tension: 350, friction: 40}}));
  // console.log(clientY, clientX);
  return (
    <animated.div
    className="card"
    onMouseMove={({clientX :x, clientY:y}) => {
      console.log(calc(x, y));
      return set({xys:calc(x,y)});
    }}
    onMouseLeave={()=>set({xys:[0,0,1] })}
    style={{transform : props.xys.interpolate(trans)}}
  >
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
    </animated.div>
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

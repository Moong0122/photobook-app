import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useSpring, animated } from 'react-spring';
import "./Photo.css";

const calc = (x,y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x,y,s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Photo({ number ,id, updated, image, name, bio, portfolio }) {

  const targetPhoto = document.getElementsByClassName("photo");
  const [props, set] = useSpring(() => ({xys : [0,0,1], config: {mass:5, tension: 350, friction: 40}}));
  // console.log(clientY, clientX);
  return (
    <animated.div
    className="card"
    onMouseMove={({clientX : x, clientY : y}) => {

      const clientRect = targetPhoto[number].getBoundingClientRect(),
            rectLeft = clientRect.left,
            rectRight = clientRect.right,
            windowCenter = window.innerWidth;

      if(rectLeft < windowCenter / 2) // 1열에 있다면,
        x += (windowCenter / 2 - rectLeft) / 2;
      else if(rectLeft > windowCenter / 2) // 2열에 있다면,
        x -= (rectRight - (windowCenter / 2)) / 2; 

      return set({xys:calc(x, y)});
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

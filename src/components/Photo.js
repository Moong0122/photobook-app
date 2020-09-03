import React from "react";
import PropTypes from "prop-types";
import { useSpring, animated } from 'react-spring';
import CardInfo from './CardInfo';
import "./Photo.css";

const calc = (x,y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x,y,s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Photo({ number ,id, updated, image, name, bio, portfolio }) {
  const targetPhoto = document.getElementsByClassName("photo");
  const [props, set] = useSpring(() => ({xys : [0,0,1], config: {mass:5, tension: 350, friction: 40}}));

  return (
    <animated.div
    className="card"
      onMouseMove={({clientX : x, clientY : y}) => {
        const clientRect = targetPhoto[number].getBoundingClientRect(),
              rectLeft = clientRect.left,
              rectRight = clientRect.right,
              windowCenter = window.innerWidth;

        if(rectLeft < windowCenter / 2) // 1열
          x += (windowCenter / 2 - rectLeft) / 2;
        else if(rectLeft > windowCenter / 2) // 2열
          x -= (rectRight - (windowCenter / 2)) / 2; 

        return set({xys:calc(x, y)});
      }}
      onMouseLeave={()=>set({xys:[0,0,1] })}
      style={{transform : props.xys.interpolate(trans)}}
  >
      <div className="photo">
        <CardInfo 
          id= {id}
          updated= {updated}
          image= {image}
          name= {name}
          bio= {bio}
          portfolio= {portfolio}
        />
      </div>
    </animated.div>
  );
}

Photo.propTypes = {
  number: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  updated: PropTypes.string.isRequired,
  // urls.regular
  image: PropTypes.string.isRequired,
  // user.username, .portfolio_url
  bio: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  portfolio: PropTypes.string.isRequired
};

export default Photo;

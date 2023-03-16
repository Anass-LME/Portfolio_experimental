import React from 'react';
import PropTypes from 'prop-types';
import './animation.css';

const BlockRevealAnimation = ({ delay, duration, className, children, color }) => (
  <span className={`block-reveal-animation ${className}`}>
    <div
      className="block-reveal-animation__element"
      style={{
        animationDelay: `${delay + duration / 2}s`,
      }}>
      {children}
    </div>
    <span
      className="block-reveal-animation__block"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        backgroundColor: color,
      }}
    />
  </span>
);

BlockRevealAnimation.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
  delay: PropTypes.number,
  duration: PropTypes.number,
};

BlockRevealAnimation.defaultProps = {
  className: '',
  delay: 0.5,
  duration: 1,
  color: '#000',
};

export default BlockRevealAnimation ;

import React from 'react';
import PropTypes from 'prop-types';

const Image = props => {
  const { src, alt, style, className} = props;

  return (
    <img
      className={className}
      style={style}
      src={src}
      alt={alt}
    />
  );
};

Image.defaultProps = {
  src: '',
  alt: 'image',
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.any
};

export default Image;
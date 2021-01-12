import React from 'react';
import { ReactComponent as Star } from './assets/star-outline.svg'

const StarIcon = (props) => {
  return (
    <Star style={ props.style } className={ props.className } fill={ props.fill }/>
  );
}

export default StarIcon;

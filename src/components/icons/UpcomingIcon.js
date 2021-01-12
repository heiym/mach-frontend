import React from 'react';
import { ReactComponent as Star } from './assets/calendar2-outline-lighter-fill.svg'

const UpcomingIcon = (props) => {
  return (
    <Star style={ props.style } fill={ props.fill } className={ props.className } />
  );
}

export default UpcomingIcon;
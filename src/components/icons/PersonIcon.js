import React from 'react';
import { ReactComponent as Person } from './assets/person-outline-fill.svg';

const PersonIcon = (props) => {
  return (
    <Person style={ props.style } fill={ props.fill } className={ props.className } />
  );
}

export default PersonIcon;
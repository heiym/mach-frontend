import React from 'react';
import { ReactComponent as Plus } from './assets/plus-schmal.svg';

const PlusIcon = (props) => {
  return (
    <Plus style={ props.style } className={ props.className } fill={ props.fill }/>
  );
}

export default PlusIcon;
import React from 'react'
import { ReactComponent as List } from './assets/list.svg';

const ListIcon = (props) => {
  return (
    <List style={ props.style } className={ props.className } fill={ props.fill }/>
  );
}

export default ListIcon;
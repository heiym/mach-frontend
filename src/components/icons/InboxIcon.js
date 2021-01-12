import React from 'react';
import { ReactComponent as Inbox } from './assets/file-tray-full.svg'

const InboxIcon = (props) => {
  return (
    <Inbox style={ props.style } className={ props.className } fill={ props.fill }/>
  );
}

export default InboxIcon;
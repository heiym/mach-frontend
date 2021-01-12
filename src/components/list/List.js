import React from 'react';
import { NavLink } from 'react-router-dom';
// import ListIcon from '../Icons/ListIcon';

const List = (props) => (
  <NavLink to={`/${props.list.list_id}`} className="list-item-name">
    <li
      className={ 'lists-list-item ' + ( props.activeList && 'active' ) }
    >
      <div className="list-item-image">


        <div className="list-icon-circle"></div>
      </div>
      <div className="list-item-name">
        <span>{props.list.name}</span>
      </div>
    </li>
  </NavLink>
)

export default List;

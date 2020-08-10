import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListOl } from '@fortawesome/free-solid-svg-icons';

const List = (props) => {

  return (
      <NavLink to={`/${props.list.list_id}`} className="list-item-name">
    <li
      className="lists-list-item"
    >
      <div className="list-item-image">
        <FontAwesomeIcon icon={faListOl} className="list-icon" />
      </div>
      <div className="list-item-name">
        <span>{props.list.name}</span>
        </div>
    </li>
      </NavLink>
  );
}

export default List;
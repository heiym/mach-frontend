import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox, faStar } from '@fortawesome/free-solid-svg-icons';

const TopLists = (props) => {
  return (
    <div className="default-lists-container">
      <ul className="list-of-lists default-lists">
        <NavLink to="/tasks" className="list-item-name" >
          <li className="lists-list-item">
            <div className="list-item-image">
              <FontAwesomeIcon icon={faInbox} className="list-icon" />
            </div>
            <div className="list-item-name">
              <span>Inbox</span>
            </div>
          </li>
        </NavLink>
        <NavLink to="/important" className="list-item-name" >
          <li className="lists-list-item">
            <div className="list-item-image">
              <FontAwesomeIcon icon={faStar} className="list-icon" />
            </div>
            <div className="list-item-name">
              <span>Important</span>
            </div>
          </li>
        </NavLink>
      </ul>
    </div>
  );
}

export default TopLists;
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import InboxIcon from '../icons/InboxIcon';
import TodayIcon from '../icons/TodayIcon';
import UpcomingIcon from '../icons/UpcomingIcon'

const TopLists = (props) => {
  const listName = useLocation().pathname.split('/').slice(1).toString();

  return (
    <div className="default-lists-container">
      <ul className="list-of-lists default-lists">
        <NavLink to="/inbox" className="list-item-name" >
          <li className={'lists-list-item ' + (listName === 'inbox' ? 'active' : '')}>
            <div className="list-item-image">
              <InboxIcon className="list-icon list-icon-inbox" />
            </div>
            <div className="list-item-name">
              <span>Inbox</span>
            </div>
          </li>
        </NavLink>
        <NavLink to="/today" className="list-item-name" >
          <li className={'lists-list-item ' + (listName === 'today' ? 'active' : '')}>
            <div className="list-item-image">
              <TodayIcon className="list-icon list-icon-today" />
            </div>
            <div className="list-item-name">
              <span>Today</span>
            </div>
          </li>
        </NavLink>
        <NavLink to="/upcoming" className="list-item-name" >
          <li className={'lists-list-item ' + (listName === 'upcoming' ? 'active' : '')}>
            <div className="list-item-image">
              <UpcomingIcon className="list-icon list-icon-upcoming" />
            </div>
            <div className="list-item-name">
              <span>Upcoming</span>
            </div>
          </li>
        </NavLink>
        { /* 
        <NavLink to="/tasks" className="list-item-name" >
          <li className="lists-list-item">
            <div className="list-item-image">
              <PersonIcon className="list-icon green-color" />
            </div>
            <div className="list-item-name">
              <span>My Tasks</span>
            </div>
          </li>
        </NavLink>
*/}
      </ul>
    </div>
  );
}

export default TopLists;

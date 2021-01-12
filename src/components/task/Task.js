import React from 'react';
import StarIcon from '../icons/StarIcon';

const Task = (props) => { 

  return (
    <li className="task-list-item">
      <div className="task-wrapper">
        <div className="task">
          <div className="task-checkbox">
            <input type="checkbox" />
          </div>
          <div className="task-name">
            <span>{props.task.name}</span>
          </div>
          <div className="task-make-fav">
            <StarIcon className="make-fav" />
          </div>
        </div>
      </div>
    </li>
  );
};

export default Task;

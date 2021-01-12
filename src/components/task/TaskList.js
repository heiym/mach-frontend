import React, { useEffect, useState } from 'react';
import Task from './Task';
import { useParams } from 'react-router-dom';

const TaskList = (props) => {
  const [list, setList] = useState({});
  const { listId } = useParams();
  console.log('TaskList.js');

  useEffect(() => {
    if (listId > 0) {
      // TODO: lists in parent component?
      const getList = async () => {
        const listResponse = await fetch(`http://localhost:4000/api/v1/lists/${listId}`, {
          headers: {
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6InRlc3RAYmlmcm9lc3QuZGUifSwiaWF0IjoxNTk2NjM0ODU2LCJleHAiOjE5MTIyMTA4NTZ9.1x-2QIpJ_ekt247EEkt8YhwL37EfAG_q6dspHujq-Xk',
            'content-type': 'application/json',
          }
        });

        const taskResponse = await fetch(`http://localhost:4000/api/v1/lists/${listId}/tasks`, {
          headers: {
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6InRlc3RAYmlmcm9lc3QuZGUifSwiaWF0IjoxNTk2NjM0ODU2LCJleHAiOjE5MTIyMTA4NTZ9.1x-2QIpJ_ekt247EEkt8YhwL37EfAG_q6dspHujq-Xk',
            'content-type': 'application/json'
          }
        });

        let list = await listResponse.json();
        list.tasks = await taskResponse.json();
        setList(list);
      }

      getList();
      return () => {
        setList({});
      }
    }
  }, [listId]);


  return (
    <div className="task-element-wrapper">
      <div className="list-data">
        <div className="list-name">
          <h1>{ list.name }</h1>
        </div>
      </div>
      <div className="task-container">
        <ul className="task-list">
          {
            list.tasks && list.tasks.length > 0 && list.tasks.map(task => {
              return (
                <Task key={task.task_id} task={task} />
              );
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default TaskList;

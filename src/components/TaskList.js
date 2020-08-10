import React, { useEffect, useState } from 'react';
import Task from './Task';
import { useParams } from 'react-router-dom';

let TaskList = (props) => {
  const [tasks, setTasks] = useState([]);
  const { listId } = useParams();

  useEffect(() => {
    if (listId > 0) {
      const getTasks = async () => {
        const response = await fetch(`http://localhost:4000/api/v1/lists/${listId}/tasks`, {
          headers: {
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6InRlc3RAYmlmcm9lc3QuZGUifSwiaWF0IjoxNTk2NjM0ODU2LCJleHAiOjE5MTIyMTA4NTZ9.1x-2QIpJ_ekt247EEkt8YhwL37EfAG_q6dspHujq-Xk',
            'content-type': 'application/json'
          }
        });

        const tasks = await response.json();
        setTasks(tasks);
      };

      getTasks();

      return () => setTasks([]);
    }
  }, [listId]);


  return (
    <ul>
      {
        tasks.length > 0 && tasks.map(task => {
          return (
            <Task key={ task.task_id } task={ task } />
          );
        })
      }
    </ul>
  );
};

export default TaskList;

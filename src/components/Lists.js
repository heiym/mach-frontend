import React, { useEffect, useState } from 'react';
import fetch from 'node-fetch';
import List from './List.js';
import CreateNewList from './CreateNewList';
import TopLists from './TopLists.js';

const Lists = (props) => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const getLists = async () => {
      const response = await fetch('http://localhost:4000/api/v1/lists', { 
        headers: { 
          'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6InRlc3RAYmlmcm9lc3QuZGUifSwiaWF0IjoxNTk2NjM0ODU2LCJleHAiOjE5MTIyMTA4NTZ9.1x-2QIpJ_ekt247EEkt8YhwL37EfAG_q6dspHujq-Xk',
          'content-type': 'application/json'
        }
      });

      let lists = await response.json();
      setLists(lists);
    };

    getLists();
  }, []);

  const handleNewList = async (listName, e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/api/v1/lists', {
      method: 'POST',
      headers: {
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6InRlc3RAYmlmcm9lc3QuZGUifSwiaWF0IjoxNTk2NjM0ODU2LCJleHAiOjE5MTIyMTA4NTZ9.1x-2QIpJ_ekt247EEkt8YhwL37EfAG_q6dspHujq-Xk',
        'content-type': 'application/json',
      },
      body: JSON.stringify({ name: listName, owner_id: 1 }),
    });

    const newList = await response.json();
    setLists([ ...lists, ...newList ]);
  }

  return (
    <div className="list-container">
      <CreateNewList
        handleNewList={ handleNewList }
      />
      <TopLists />
      <div className="all-lists">
        <ul className="list-of-lists">
          {
            lists.map(list => {
              return (
                <List
                  key={list.list_id}
                  list={list}
                />
              );
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default Lists;

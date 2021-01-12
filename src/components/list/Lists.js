import React, { useEffect, useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import fetch from 'node-fetch';
import List from './List.js';
import CreateNewList from './CreateNewList';
import TopLists from './TopLists.js';

const listReducer = (list, action) => {
  switch(action.type) {
    case 'INIT': 
      return action.lists;
    case 'ADD_LIST':
      return list.push(action.newList);
    //TODO: implement
    case 'DELETE_LIST':
      return list.filter( list => list.id !== action.list.list_id );
  }
}

const Lists = (props) => {
  const [lists, dispatch] = useReducer(listReducer, []);
  const listId = parseInt(useLocation().pathname.slice(1));

  useEffect(() => {
    const getLists = async () => {
      const response = await fetch('http://localhost:4000/api/v1/lists', { 
        headers: { 
          'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6InRlc3RAYmlmcm9lc3QuZGUifSwiaWF0IjoxNTk2NjM0ODU2LCJleHAiOjE5MTIyMTA4NTZ9.1x-2QIpJ_ekt247EEkt8YhwL37EfAG_q6dspHujq-Xk',
          'content-type': 'application/json'
        }
      });

      let lists = await response.json();
      dispatch({ type:'INIT', lists: lists });
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
    dispatch({ type:'ADD_LIST', newList: newList });
  }

  const handleDeleteList = async (listId) => {}

  return (
    <div className="list-container">
      <CreateNewList
        handleNewList={ handleNewList }
      />
      <TopLists />
      <div className="user-list-container">
        <ul className="list-of-lists">
          {
            lists.map(list => {
              return (
                <List
                  key={list.list_id}
                  list={list}
                  activeList={ listId === list.list_id }
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

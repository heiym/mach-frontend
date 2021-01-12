import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Lists from './components/list/Lists.js';
import Header from './components/layout/Header.js';
import TaskList from './components/task/TaskList.js';

function App() {

  return (
    <Router>
      { /* <Header /> */ }
      <main className="app">
        <Lists />
        <Switch>
          <Route exact path="/inbox" component={TaskList} />
          <Route exact path="/today" component={TaskList} />
          <Route exact path="/upcoming" component={TaskList} />
          <Route 
          path="/:listId"
          render={ (routeProps) => (
            <TaskList { ...routeProps } />
          )} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;

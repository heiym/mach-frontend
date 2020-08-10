import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Lists from './components/Lists.js';
import TaskList from './components/TaskList.js';

function App() {

  return (
    <Router>
      <main className="app">
        <Lists />
        <Switch>
          <Route exact path="/tasks" component={TaskList} />
          <Route exact path="/important" component={TaskList} />
          <Route path="/:listId">
            <TaskList />
          </Route>
        </Switch>
      </main>

    </Router>
  );
}

export default App;

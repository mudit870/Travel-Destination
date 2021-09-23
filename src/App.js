import './App.css';
import {BrowserRouter as Router, Route } from "react-router-dom"
import Home from './components/home';
import Form from './components/form';
import Activities from './components/activities';
import { useState } from 'react';

function App() {

  const [activityStatus, setActivityStatus]=useState(null)

  return (
    <Router>
      <Route exact path="/">
        <Home setActivityStatus={setActivityStatus} />
      </Route>
      <Route exact path="/activities">
        <Activities activityStatus={activityStatus} />
      </Route>
      <Route exact path="/form" component={Form} />
    </Router>
  );
}

export default App;

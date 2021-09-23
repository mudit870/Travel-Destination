import './App.css';
import {BrowserRouter as Router, Route } from "react-router-dom"
import home from './components/home';
import Form from './components/form';
import activities from './components/activities';

function App() {
  return (
    <Router>
      <Route exact path="/" component={home} />
      <Route exact path="/form" component={Form} />
      <Route exact path="/activities" component={activities} />
    </Router>
  );
}

export default App;

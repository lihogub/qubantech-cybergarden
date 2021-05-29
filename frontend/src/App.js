import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import Profile from './pages/Profile'
import Dialogs from './pages/Dialogs'
import About from './pages/About'
import NotFound from './pages/NotFound'

import axios from 'axios'


function App() {
  return (
      <Router>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/dialogs">Dialogs</Link>
          <Switch>
              <Route path='/' component={About} exact />
              <Route path='/profile' component={Profile} />
              <Route path='/dialogs' component={Dialogs} />
              <Route component={NotFound} />
          </Switch>
      </Router>
  );
}

export default App;

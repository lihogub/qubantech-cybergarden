import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import Profile from './pages/Profile'
import Dialogs from './pages/Dialogs'
import Feed from './pages/Feed'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Chat from './pages/Chat'

import Navigation from "./components/Navigation";

function App() {
  return (
      <Router>
          <Navigation/>
          <Switch>
              <Route path='/' component={About} exact />
              <Route path='/profile' component={Profile} />
              <Route path='/dialogs' component={Dialogs} />
              <Route path='/chat/:id' component={Chat} />
              <Route path='/feed' component={Feed} />
              <Route component={NotFound} />
          </Switch>
      </Router>
  );
}

export default App;

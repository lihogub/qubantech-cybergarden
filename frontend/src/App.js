import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import Profile from './pages/Profile'
import Dialogs from './pages/Dialogs'
import Feed from './pages/Feed'
import Things from './pages/Things'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Navigation from "./components/Navigation"
import ThingsProfile from "./pages/ThingsProfile";

function App() {
  return (
      <Router>
          <Navigation/>
          <Switch>
              <Route path='/' component={About} exact />
              <Route path='/profile' component={Profile} />
              <Route path='/dialogs' component={Dialogs} />
              <Route path='/feed' component={Feed} />
              <Route path='/things' component={Things} />
              <Route path='/thingsprofile' component={ThingsProfile} />
              <Route component={NotFound} />
          </Switch>
      </Router>
  );
}

export default App;

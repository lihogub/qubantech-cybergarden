import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import SignUp from './pages/SignUp.jsx'
import Login from './pages/Login.jsx'
import NotFound from './pages/NotFound.jsx'
import About from './pages/About.jsx'

import axios from 'axios'


function App() {
  return (
      <Router>
          <Link to="/">Home</Link>
          <Link to="/signup">Sign up</Link>
          <Link to="/login">Login</Link>
          <Switch>
              <Route path='/' component={About} exact />
              <Route path='/signup' component={SignUp} />
              <Route path='/login' component={Login} />
              <Route component={NotFound} />
          </Switch>
      </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import AppNav from './components/AppNav';

function App() {
    return(
      <Router>
        <AppNav/>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    )
}

export default App

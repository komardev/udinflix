import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

// Redux-Conf
// import { Provider } from 'react-redux';
// import { store } from '../config/redux';

// Route App
import AppRoutes from './AppRoutes';

const App = () => {
  return (
    // <Provider store={store}>
      <Router>
          <Switch>
              {AppRoutes.map(route => (
                  <Route key={route.id} {...route} />
              ))}
          </Switch>
      </Router>
    // </Provider>
  )
}

export default App
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Login from './Login/Login/Login';
import Register from './Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import AllCollection from './Shared/AllCollection/AllCollection';
import Purchase from './pages/Purchase/Purchase';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/register'>
              <Register></Register>
            </Route>
            <PrivateRoute exact path='/purchase/:id'>
              <Purchase></Purchase>
            </PrivateRoute>
            <Route exact path='/allCollection'>
              <AllCollection></AllCollection>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

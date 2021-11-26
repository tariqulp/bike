import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './pages/Login/Register/Register';
import Explore from './pages/AddProduct/Explore/Explore';
import Order from './pages/Order/Order/Order';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
            <PrivateRoute path='/orders/:productId'>
              <Order />
            </PrivateRoute>
            <Route path='/explore'>
              <Explore />
            </Route>
            <PrivateRoute path='/dashboard'>
              <Dashboard />
            </PrivateRoute>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route}from 'react-router-dom'
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import PrivateRoute from './components/routing/PrivateRoute';
import Admin from './components/admin/Admin';
import Home from './components/pages/Home';
import Project from './components/projects/Project';
import Login from './components/auth/Login';
/*import Register from './components/auth/Register';*/
import AuthState from './context/auth/AuthState';
import ProjectState from './context/project/ProjectState';
import 'bootstrap/dist/css/bootstrap.min.css'
import "@vetixy/circular-std";
import './App.css';
import ScrollRestoration from "./scrollrestore/ScrollRestoration";
/*import P from 'popper';*/
//import $ from 'jquery'
//import 'bootstrap/dist/js/bootstrap.min'



function App() {
  return (
    <AuthState>
      <ProjectState>
        <Router>
          <ScrollRestoration />
          <Navbar />
          <Switch>
            <PrivateRoute exact path="/admin" component={Admin} />
            <Route exact path="/" component={Home} />
            <Route exact path="/project" component={Project} />
            <Route exact path="/login" component={Login} />
            {/*<Route exact path="/register" component={Register} />*/}
          </Switch>
          <Footer />
        </Router>
      </ProjectState>
    </AuthState>
  );
}

export default App;

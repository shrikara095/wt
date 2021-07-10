import React from "react";
import Dashboard from './Dashboard';
import {BrowserRouter as Router,useHistory,Switch,Route} from "react-router-dom";
import MyProfile from './MyProfile';
import SignIn from './SignIn';
import FormsMain from './FormsMain';
import Register from './register';
import Kitchen from './Kitchen';
import Kitchen1 from './Kitchen1'
import Kitchen2 from './Kitchen2'
import Snackbar from './Snackbar'
function App()
{
  window.nm="true";
  window.vw="true";
  window.cl="true";
  window.fm="true";
  return(
    <Router>
    <div>
    
    <Switch>
    <Route path="/login" exact component={SignIn}/>
    <Route path="/kitchen" exact component={Kitchen}/>
    <Route path="/kitchen1" exact component={Kitchen1}/>
    <Route path="/kitchen2" exact component={Kitchen2}/>
    <Route path="/" exact component={Dashboard}/>
    <Route path="/register" exact component={Register}/>
    <Route path="/profile" component={MyProfile} /> 
    <Route path="/forms" component={FormsMain}/> 
    <Route path="/popup" component={Snackbar}/> 
    </Switch>
     
    </div>
    </Router>
  );
}
export default App;

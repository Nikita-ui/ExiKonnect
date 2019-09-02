import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Aboutus from './components/Aboutus/Aboutus';
import Partners from './components/Partners/Partners';
import FAQs from './components/FAQs/FAQs';
import Contactus from './components/Contactus/Contactus';
import Signup from './components/Account/Signup';
import SignIn from './components/Account/SignIn';
function App(){

  return (
    <BrowserRouter>
    <div>
       <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/Aboutus"  component={Aboutus}/>
       <Route path="/Partners" component={Partners}/>
       <Route path="/FAQs" component={FAQs}/>
       <Route path="/Contactus" component={Contactus}/>
       <Route path="/Signup" component={Signup}/>
       <Route path="/SignIn" component={SignIn}/>
       </Switch>
    </div>
    </BrowserRouter>
  );
}


export default App;

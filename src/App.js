import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Rate from './components/Rate/Rate';
import About from './components/About/About'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Contacts from './components/Contacts/Contacts';


class App extends React.Component {

  cookie = () => {
    let divCookie = document.querySelector(".well");
    divCookie.style.display = 'none';
  }
  render(){ 
  return ( 
    <Router>
      <div className='site'>
        <Header/>
        
        <div className='container'>
          <main>
            
            <Switch>
              <Route exact path='/' component={Rate}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/contacts' component={Contacts}/>
            </Switch>
            
          </main>
        </div>

        <div className='container' id='cookie-info'>
          <div className='site-container'>
            <div className='well'> На нашем сайте мы используем cookie для сбора информации технического характера.<br/>В частности, для персонифицирования работы сайта мы обрабатываем IP-адрес региона вашего местоположения. &nbsp;<button onClick={this.cookie} className= 'btn btn-primary btn-sm'>ОК</button></div>
          </div>
        </div>
        <Footer />
      </div>
      </Router>
  );
  }
}

export default App;

import React from 'react';
import './App.css';

 import Start from './components/Start' 
import Duyurular from './components/Duyurular'
import Iletisim from './components/Iletisim'
import InsanKaynakları from './components/InsanKaynakları'
import Kurumsal from './components/Kurumsal'
import Tarihce from './components/Tarihce'
import Yönetim from './components/Yönetim'
import Misyon from './components/Misyon'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navigation from './components/Navigation'
import trabsu from './images/aa.png'
import deneme from './components/deneme'





function App() {
  return (
    <BrowserRouter> 
   
    <div className="App">
      
    
      <div className="Image">
      <img src={trabsu} alt='foto'/>
      </div>
      <div className="Navigation" >
      <Navigation />  
      </div> 
      
      
      <Switch>
      
      <Route path='/' component={Start} exact />
     
      
      <Route path='/duyurular' component={Duyurular}  />
      <Route path='/iletisim' component={Iletisim}  />
      <Route path='/kurumsal' component={Kurumsal}  />
      <Route path='/insanKaynakları' component={InsanKaynakları} />
      <Route path='/tarihce' component={Tarihce} />
      <Route path='/yönetim' component={Yönetim} />
      <Route path='/misyon' component={Misyon} />
      <Route  path='/deneme' component={deneme} />
      
      
      
      
     
      
      
      </Switch>
       
    </div>
    
    </BrowserRouter>
    
  );
}

export default App;

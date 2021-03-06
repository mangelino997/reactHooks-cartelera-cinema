import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import 'bulma/css/bulma.css'
import Detail from './paginas/Detail'
import Home  from './paginas/Home'
import { NotFound } from './paginas/NotFound'


class App extends Component {
  render() {
    //manejo de rutas de forma 'imperativa'
    // const url = new URL(document.location)
    // const Page = url.searchParams.has('id')?
    //   <Detail id={url.searchParams.get('id')}/>
    //   :<Home />

      //Con Switch y Route se manejan las rutas de forma 'declarativa'
      return (
        <div className="App"> 
          
            <Route exact path='/' component={Home}/>
            <Route path='/detail/:movieId' component={Detail}/>
            <Route component={NotFound}/>
          
        </div>
      )
  }

  
}

export default App;
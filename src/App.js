import React, { Component } from 'react';
import { Switch, Route , BrowserRouter as Router, Link,} from "react-router-dom";
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
          <Router basename="/reactHooks-cartelera-cinema">
            <Link to='/' />
            <Link to='/detail/:movieId' />
          </Router>
          <Switch base>
            <Route exact path='/reactHooks-cartelera-cinema' component={Home}/>
            <Route path='/detail/:movieId' component={Detail}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      )
  }
/* 
<Switch base>
            <Route exact path='/reactHooks-cartelera-cinema' component={Home}/>
            <Route path='/detail/:movieId' component={Detail}/>
            <Route component={NotFound}/>
          </Switch>*/
  
}

export default App;
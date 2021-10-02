import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import TeamModal from './components/TeamModal'
import Navbar from './components/Navbar'

import './styles/style.scss'

let team = ''
if (localStorage.getItem('team')) {
  team = localStorage.getItem('team')
}


const App = () => (
  <BrowserRouter>
    <TeamModal />
    <Navbar team={team} />
    <Switch>
      <Route exact path="/" render={() => (<Home team={team} />)} />
    </Switch>
  </BrowserRouter>
)


export default App
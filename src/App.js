import React from 'react'
import './App.css'
import { BrowserRouter, Link, Route } from 'react-router-dom'

import { Home } from './Components/Home'
import { LeafletMap } from './Components/LeafLetMap'
 
function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/leaflet">
        <LeafletMap></LeafletMap>
      </Route>
    </BrowserRouter>
  );
}

export default App;

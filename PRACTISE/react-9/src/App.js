import React, { Component } from 'react'
import Navbar from './APP/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
 class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route ></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
export default App
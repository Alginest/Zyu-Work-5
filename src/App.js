import { CssBaseline } from '@mui/material'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Categorys from './components/Categorys/Categorys'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products.js/Products'

const App = () => {
  return (
    <>
      <CssBaseline />
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Hero />
            <Categorys />
            <Products />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App

import React from 'react'
import Header from './Header.component'
import Footer from './Footer.component';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import PhotoPage from '../pages/PhotoPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useParams } from 'react-router';
import { DISHES } from '../shared/dishes';
import Photo from './Photo';
import OrderPage from '../pages/OrderPage';
import CartPage from '../pages/CartPage';

const PhotoWithId = (props) => {
  let { photoid } = useParams()
  const dish = DISHES[photoid]
  return (
    <div>
      <Photo dish={dish} />
    </div>
  )
}

function HomeComponent() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/' element={<HomePage />} />
          <Route exact path='/about' element={<AboutPage />} />
          <Route exact path='/photo' element={<PhotoPage />} />
          <Route path='/photo/:photoid' element={<PhotoWithId />} />
          <Route exact path='/order' element={<OrderPage dishes={DISHES} />} />
          <Route exact path='/cart' element={<CartPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default HomeComponent
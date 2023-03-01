import React from 'react';

import { About, Header, Works, Skills, Testimonials, Footer } from './containers';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Works />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App;
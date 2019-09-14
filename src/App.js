import React from 'react';
import './App.css';
import {Route} from "react-router-dom";

import HomePage from './Pages/HomePage/HomePage';
import CostTrackingPage from './Pages/CostTrackingPage/CostTrackPage';
import Footer from './components/Footer/footer.component';
import Navbar from './components/Navbar/Navbar';
import Contact from './Pages/ContactPage/contact.component';
import InterestPage from './Pages/InterestPage/InterestPage';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path='/' component={HomePage}  />
      <Route exact path='/cost-tracking' component={CostTrackingPage}  />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/interest-cal' component={InterestPage} />
      <Footer />
    </div>
  );
}

export default App;

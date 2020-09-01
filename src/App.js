import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage';
import CostTrackingPage from './Pages/CostTrackingPage/CostTrackPage';
import Footer from './components/Footer/footer.component';
import Navbar from './components/Navbar/Navbar';
import Contact from './Pages/ContactPage/contact.component';
import InterestPage from './Pages/InterestPage/InterestPage';
import PolicySudoku from './Pages/PolicyPage/policy.jsx';
import PolicyList from './Pages/PolicyList/PolicyList';
import Sudoku from './Pages/AppIntroduction/Sudoku/Sudoku';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Route exact path='/' component={HomePage}  />
        <Route exact path='/cost-tracking' component={CostTrackingPage}  />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/interest-cal' component={InterestPage} />
        <Route exact path='/policy' component={PolicyList} />
        <Route exact path='/policy/sudoku' component={PolicySudoku} />
        <Route exact path='/sudoku' component={Sudoku} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;

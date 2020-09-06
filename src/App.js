import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import CostTrackingPage from './Pages/CostTrackingPage/CostTrackPage';
import Footer from './components/Footer/footer.component';
import Navbar from './components/Navbar/Navbar';
import Contact from './Pages/ContactPage/contact.component';
import InterestPage from './Pages/InterestPage/InterestPage';
import PolicySudoku from './Pages/PolicyPage/policy.jsx';
import PolicyList from './Pages/PolicyList/PolicyList';
import Sudoku from './Pages/AppIntroduction/Sudoku/Sudoku';
import FinanceAdvisor from './Pages/AppIntroduction/Finance/FinanceAdvisor';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path='/' component={HomePage}  />
      <Route exact path='/cost-tracking' component={CostTrackingPage}  />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/interest-cal' component={InterestPage} />
      <Route exact path='/policy' component={PolicyList} />
      <Route exact path='/policy/sudoku' component={PolicySudoku} />
      <Route exact path='/sudoku' component={Sudoku} />
      <Route exact path='/finance-advisor' component={FinanceAdvisor} />
      <Footer />
    </div>
  );
}

export default App;

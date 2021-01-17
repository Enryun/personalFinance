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
import PolicyFinance from './Pages/PolicyPage/finance_policy.jsx'
import POS from './Pages/AppIntroduction/POS/Pos'
import PosSetUp from './Pages/AppIntroduction/POS/PosSetUp'
import POS_remote from './Pages/AppIntroduction/POS/POS_remote'


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
      <Route exact path='/policy/finance-advisor' component={PolicyFinance} />
      <Route exact path='/sudoku' component={Sudoku} />
      <Route exact path='/finance-advisor' component={FinanceAdvisor} />
      <Route exact path='/u-coffee' component={POS} />
      <Route exact path='/ucoffee-setup' component={PosSetUp} />
      <Route exact path='/ucoffee-remote' component={POS_remote} />
      <Footer />
    </div>
  );
}

export default App;

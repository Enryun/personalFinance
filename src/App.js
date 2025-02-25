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
import CoffeeReport from './Pages/PolicyPage/coffee_report'
import UCoffee from './Pages/PolicyPage/u_coffee'
import CoffeeReportEULA from './Pages/PolicyPage/coffee_report_eula.jsx'
import PayDailyPolicy from './Pages/PolicyPage/cost_tracking.jsx'
import PayDaily from './Pages/AppIntroduction/PayDaily/pay_daily.jsx';
import DarkHorse from './Pages/AppIntroduction/DarkHorse/darkhorse.jsx';
import PolicyDarkHorse from './Pages/PolicyPage/dark_horse_policy.jsx';
import NeonCloud from './Pages/AppIntroduction/NeonCloud/neoncloud';
import PolicyNeonCloud from './Pages/PolicyPage/neon_cloud.jsx';
import GalaxyGallery from './Pages/AppIntroduction/GalaxyGallery/GalaxyGallery';
import GalaxyGalleryPolicy from './Pages/PolicyPage/galaxy_gallery';
import RandomRover from './Pages/AppIntroduction/RandomRover/RandomRover.jsx';
import RandomRoverPolicy from './Pages/PolicyPage/random_rover';
import SudokuZen from './Pages/AppIntroduction/SudokuZen/SudokuZen.jsx';
import PolicySudokuZen from './Pages/PolicyPage/suduku_zen_policy.jsx';
import PolicyWordSearch from './Pages/PolicyPage/wordsearch.jsx';


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
      <Route exact path='/policy/coffee-report' component={CoffeeReport} />
      <Route exact path='/policy/ucoffee' component={UCoffee} />
      <Route exact path='/policy/ucoffee-eula' component={CoffeeReportEULA} />
      <Route exact path='/policy/pay-daily' component={PayDailyPolicy} />
      <Route exact path='/pay-daily' component={PayDaily} />
      <Route exact path='/policy/dark-horse' component={PolicyDarkHorse} />
      <Route exact path='/dark-horse' component={DarkHorse} />
      <Route exact path='/policy/neon-cloud' component={PolicyNeonCloud} />
      <Route exact path='/neon-cloud' component={NeonCloud} />
      <Route exact path='/galaxy-gallery' component={GalaxyGallery} />
      <Route exact path='/policy/galaxy-gallery' component={GalaxyGalleryPolicy} />
      <Route exact path='/random-rover' component={RandomRover} />
      <Route exact path='/policy/random-rover' component={RandomRoverPolicy} />
      <Route exact path='/sudoku-zen' component={SudokuZen} />
      <Route exact path='/policy/sudoku-zen' component={PolicySudokuZen} />
      <Route exact path='/policy/wordsearch' component={PolicyWordSearch} />
      <Footer />
    </div>
  );
}

export default App;

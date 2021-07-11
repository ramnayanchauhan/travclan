import './App.css';
import Homepage from './Component/Homepage'
import {Switch,Route} from 'react-router-dom';
import BidData from './Component/BidData';
import PrimarySearchAppBar from './Component/Header';
function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/bidData/:customerId" exact component={BidData} />
      </Switch>
    </div>
  );
}

export default App;

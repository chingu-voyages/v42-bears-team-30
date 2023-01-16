import './App.css';
import DetailsPage from './components/detailspage/detailspage';
import Homepage from './components/homepage/homepage';

import Cards from './components/cards/cards';
import TopCards from './components/cards/topRatedCards/topRatedCards';
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <div className="App">
      <Homepage />
      <DetailsPage />
    </div>
  );
}

export default App;

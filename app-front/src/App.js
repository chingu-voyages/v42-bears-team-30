import './App.css';
import Homepage from './components/homepage/homepage';
import Cards from './components/cards/cards';
import TopCards from './components/cards/topRatedCards/topRatedCards';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
      <Homepage />
      <Cards />
      <TopCards />
    </div>
  );
}

export default App;

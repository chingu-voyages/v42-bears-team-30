import { Routes,Route } from 'react-router-dom'
import DetailsPage from './components/detailspage/detailspage';
import Homepage from './components/homepage/homepage';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route  path="/" exact element={<Homepage />} />
          <Route path='/room-details/:id' exact element={<DetailsPage />} />
        </Routes>
         
    </div>
  );
}

export default App;

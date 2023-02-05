import { Routes,Route } from 'react-router-dom'
import DetailsPage from './components/detailspage/detailspage';
import Homepage from './components/homepage/homepage';
import CancelPay from './components/checkout/CancelPay'
import SuccessPay from './components/checkout/SuccessPay'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AvailableRooms from './components/availableRooms/availableRooms';



function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route  path="/" exact element={<Homepage />} />
          <Route path='/room/:id' exact element={<DetailsPage />} />
          <Route path='/success-pay' element={<SuccessPay />} />
          <Route path='/cancel-pay' element={<CancelPay />} />
          <Route path='/available/rooms' element={<AvailableRooms />} />
        </Routes>
         
    </div>
  );
}

export default App;

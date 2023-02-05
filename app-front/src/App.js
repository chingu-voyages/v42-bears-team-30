import { Routes,Route } from 'react-router-dom'
import DetailsPage from './components/detailspage/detailspage';
import Homepage from './components/homepage/homepage';
import CancelPay from './components/checkout/CancelPay'
import SuccessPay from './components/checkout/SuccessPay'
import { Provider} from 'react-redux'
import {store} from './store/redux'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <div className="App">
      <Provider store={store}>

      
        <Routes>
          <Route  path="/" exact element={<Homepage />} />
          <Route path='/room/:id' exact element={<DetailsPage />} />
          <Route path='/success-pay' element={<SuccessPay />} />
          <Route path='/cancel-pay' element={<CancelPay />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;

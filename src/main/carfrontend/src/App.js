import logo from './logo.svg';
import './App.css';
import HeaderComponents from './components/HeaderComponents';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ListCarMemberComponents from './components/ListCarMemberComponents';
import FooterComponents from './components/FooterComponents';
import AddCarMemberComponents from './components/AddCarMemberComponents';

function App() {
  return (
    <div className="App">
      <div>
        <Router>
        <HeaderComponents/>
        <div className=''>
          <Routes>
            <Route path='/' element={<ListCarMemberComponents/>}/>
            <Route path='/carmembers' element={<ListCarMemberComponents/>}/>
            <Route path='/add-carmembers' element={<AddCarMemberComponents/>}/>
            <Route path='/edit-carmembers/:id' element={<AddCarMemberComponents/>}/>
          </Routes>
        </div>
        <FooterComponents/>
        </Router>
      </div>
    </div>
  );
  
}

export default App;



import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './pages/headerPage/header';
import Front from './pages/frontPage/front';
import Getblock from './pages/getblockPage/getblock';
import GetTransaction from './pages/gettansactionPage/getTransaction';
import Address from './pages/addressPage/address';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes >
        <Route path="/" element={<Front/>} />
        <Route path="/getBlock" element={<Getblock/>}/>
        <Route path="/getTransaction" element={<GetTransaction/>}/>
        <Route path="/address" element={<Address/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

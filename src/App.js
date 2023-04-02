import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import { Routes,Route } from 'react-router-dom';
import CartDetails from './Components/CartDetails';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">

<Header/>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/cart/:id" element={<CartDetails />} />

</Routes>
    </div>
  );
}

export default App;

import './App.css';
import Cart from './Components/Cart/Cart';
import AllCategories from './Components/Filter/AllCategories';
import Goods from './Components/GoodsComponents/Goods';


function App() {
  return (
    <div className="App">
        <AllCategories />
        <Goods />
        <Cart />
    </div>
  );
}

export default App;

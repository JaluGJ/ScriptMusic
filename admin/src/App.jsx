import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import NewProduct from './components/Newproduct/NewProduct';
import Products from './pages/products/Products';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products/new' element={ <NewProduct />}/>
          <Route path='/products' element={ <Products />}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

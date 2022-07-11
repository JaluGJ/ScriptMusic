import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import NewProduct from './components/Newproduct/NewProduct';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Home />}/>
          <Route path='/new' element={ <NewProduct />}/> */}
          <Route path='/' element={ <NewProduct/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

import {useState, useEffect}from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import NewProduct from './components/Newproduct/NewProduct';
import Login from './pages/login/Login';
import Products from './pages/products/Products';

function App() {

  const [auth, setAuth] = useState(null);
  console.log(auth)
  useEffect(() => {
    const u = localStorage.getItem('user');
    u && JSON.parse(u) ? setAuth(true) : setAuth(false)
  }, []);

  useEffect(() => {
    localStorage.setItem('user', auth);
  }, [auth]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {
            !auth && (
              <Route path='/' element={<Login authenticate={() => setAuth(true)} />} />
            )
          }
          {
            auth && (
              <>
                <Route path='/home' element={<Home logout={() => setAuth(false)} />} />
                <Route path='/products/new' element={<NewProduct />} />
                <Route path='/products' element={<Products />} />
                <Route path='/products/:id' element={<Home />} />
              </>
            )
          }
          <Route path='*' element={<Navigate to={auth ? '/home' : '/'} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

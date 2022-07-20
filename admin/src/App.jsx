import {useState, useEffect}from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import UpdateProduct from './components/updateProduct/updateProduct';
import NewProduct from './components/Newproduct/NewProduct';
import Login from './pages/login/Login';
import Products from './pages/products/Products';
import Users from './pages/users/Users';

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
               {/*  <Route path='/home' element={<Home />} /> */}
                <Route path='/products' element={<Products logout={() => setAuth(false)}/>} />
                <Route path='/products/new' element={<NewProduct logout={() => setAuth(false)}/>} />
                <Route path='/products/:id' element={<UpdateProduct logout={() => setAuth(false)}/>} />
                <Route path='/users/' element={<Users logout={() => setAuth(false)}/>} />
              </>
            )
          }
          <Route path='*' element={<Navigate to={auth ? '/products' : '/'} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

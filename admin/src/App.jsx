import {useState, useEffect}from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import UpdateProduct from './components/updateProduct/updateProduct';
import NewProduct from './components/Newproduct/NewProduct';
import Login from './pages/login/Login';
import Products from './pages/products/Products';
import Users from './pages/users/Users';
import validate from './pages/login/validate.js'

function App() {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('user');
    if (data !== "null") {
      setAuth(data);
    }
    if(data === "null"){
      setAuth(null);
    }
  }, [])

  useEffect(() => {
    const u = localStorage.getItem('user');
    const e = localStorage.getItem('email');
    if(u !== null){
      validate(u)
    .then(res => {
      if (res === e) {
        return setAuth(u);
      }
      setAuth(false)
      return localStorage.clear('user')
    })
  }
  }, []);


  return (
    <div className="App">
        <Routes>
          {
            !auth && (
              <>
                <Route path="/" element={<Login/>} />
              </>
            )
          }
          {
            auth && (
              <>
                <Route path="/" element={<Home/>} />
                <Route path='/products' element={<Products/>} />
                <Route path='/products/new' element={<NewProduct/>} />
                <Route path='/products/:id' element={<UpdateProduct/>} />
                <Route path='/users' element={<Users/>} />
              </>
            )
          }
          <Route path="*" element={auth ? <Users/> : <Login/>} />
        </Routes>
    </div>
  )
}

export default App

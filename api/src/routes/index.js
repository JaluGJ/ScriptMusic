const { Router } = require('express')
//importar los componentes donde tienen todas las rutas
const { getAllProducts, getProductById, updateProduct, uploadProduct, deleteProduct } = require('../controllers/products')
const { getAllUsers, registerUser, loginUser, loginAdmin } = require('../controllers/user')
const { paymentCard } = require('../controllers/payment')
const routes = Router()

//hacer todas las rutas a esos componentes con el router.use('/algo', algo)

// PRODUCTS ROUTES
routes.post('/products', uploadProduct)

routes.get('/products', getAllProducts)

routes.get('/products/:id', getProductById)

routes.delete('/products/:id', deleteProduct)

routes.put('/products/:id', updateProduct)
// PRODUCTS ROUTES

// USER ROUTES

routes.post('/login', loginUser)

routes.post('/signup', registerUser)

routes.post('/loginAdmin', loginAdmin)

routes.get('/users', getAllUsers)
// USER ROUTES

// PASSPORT ROUTES

routes.get('/google', (req,res)=> res.send(req.user));

//PAYMENT ROUTES

routes.post('/create-payment-intent', paymentCard )

//PAYMENT ROUTES

module.exports = routes
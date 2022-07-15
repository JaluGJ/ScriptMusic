const { Router } = require('express')
//importar los componentes donde tienen todas las rutas
const { getAllProducts, getProductById, updateProduct, uploadProduct, deleteProduct } = require('../controllers/products')
const { getAllUsers, registerUser, loginUser } = require('../controllers/user')
const { paymentCard } = require('../controllers/payment')
const { statusPayment } = require('../controllers/statusPayments')

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


// routes.post('/signup', passport.authenticate('signup', { session: false }),
//  async(req, res, next) => {
//     try {
//         const token = jwt.sign({ id: req.user._id }, JWT_SECRET, { expiresIn: 86400 })
//         res.json({
//             token,
//             user: req.user
//         })   
//     } catch (error) {
//         next(error)
//     }
// })

// routes.post('/login', passport.authenticate('login', { session: false }),
//     async(err, user, next) => {
//         try {
//             if(err || !user){
//                 const error = new Error('Usuario o contraseña invalidos')
//                 next(error)
//             }
//             req.login(user, { session: false }, async(err) => {
//                 if(err){
//                     next(err)
//                 }
//                 console.log("aaaaaa")
//                 const body = {_id, email, firstName, lastName}
//                 const token = jwt.sign({ user: body }, JWT_SECRET)
//                 res.json({
//                     user,
//                     token
//                 })
//             })
//         } catch (error) {
//             next(error)
//         }
// })


// routes.get('/profile', passport.authenticate('jwt', { session: false }),
//     async(req, res, next) => {
//         try {
//             const user = await User.findById(req.user._id)
//             res.json({
//                 user,
//                 token: req.query.token
//             })
//         } catch (error) {
//             next(error)
//         }
// })


routes.get('/users', getAllUsers)
// USER ROUTES

// PASSPORT ROUTES

routes.get('/google', (req,res)=> res.send(req.user));

//PAYMENT ROUTES

routes.post('/create-payment-intents', paymentCard )

routes.post('/status-payment', statusPayment )

//PAYMENT ROUTES

module.exports = routes
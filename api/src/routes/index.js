const { Router } = require('express')
//importar los componentes donde tienen todas las rutas
const { getAllProducts, getProductById, updateProduct, uploadProduct, deleteProduct } = require('../controllers/products')
const { getAllUsers, registerUser, loginUser, loginAdmin, confirmUser, profile, profileAdmin, updateProfile, googleLogin, validateToken, getOneUser, banUser, unBanUser, getUserBanned } = require('../controllers/user')
const { createPromo, deletePromo, getPromos, getPromoById } = require('../controllers/promos')
const { paymentCard } = require('../controllers/payment')
const { statusPayment } = require('../controllers/statusPayments')
const { soldProducts } = require('../controllers/soldInfo')
const { newFavourite, getFavourites, deleteFavoutite } = require('../controllers/favourites')
const { addRating } = require('../controllers/rating')

const routes = Router()

//hacer todas las rutas a esos componentes con el router.use('/algo', algo)

// PRODUCTS ROUTES
routes.post('/products', uploadProduct)

routes.get('/products', getAllProducts)

routes.get('/products/:id', getProductById)

routes.delete('/products/:id', deleteProduct)

routes.put('/products/:id', updateProduct)

    // rating & comment

routes.post('/rating', addRating)

// PRODUCTS ROUTES

// USER ROUTES

    //login & signup

routes.post('/login', loginUser)

routes.post('/signup', registerUser)

routes.post('/loginAdmin', loginAdmin)

routes.get('/user/confirm/token/:token', confirmUser)

    //user info

routes.get('/profile', profile)

routes.put('/profile', updateProfile)

routes.get('/users', getAllUsers)

routes.get('/user/:id', getOneUser)

routes.get('/admin-profile', profileAdmin)

     //favs
// USER BAN

routes.get('/ban/user', getUserBanned)

routes.post('/ban/user/:id', banUser)

routes.post('/unban/user/:id', unBanUser)


// USER BAN

routes.post('/profile/favs', newFavourite)

routes.get('/profile/favs', getFavourites)

routes.delete('/profile/favs', deleteFavoutite)


// USER ROUTES

// PASSPORT ROUTES

// routes.get('/google', googleLogin);

// PASSPORT ROUTES

// PAYMENT ROUTES

routes.post('/create-payment-intents', paymentCard )

routes.post('/status-payment', statusPayment )

// PAYMENT ROUTES

// SOLD ROUTES

routes.get('/sold', soldProducts )

// SOLD ROUTES

// PROMOS ROUTES
routes.get('/promos', getPromos)

routes.post('/create-promo', createPromo)

routes.delete('/delete-promo/:id', deletePromo)

routes.get('/promos/:id', getPromoById)

// PROMOS ROUTE

// AUTH

routes.get('/validate-token', validateToken)


module.exports = routes
const express = require('express')
const routes = express.Router()




const UserController = require('./controllers/UserController')

routes.get('/api/v1/users', UserController.index)
routes.get('/api/v1/users/:user_id', UserController.indexOne)
routes.post('/api/v1/user', UserController.create)
routes.put('/api/v1/users/user_id/:id', UserController.update)
routes.delete('/api/v1/users/:id', UserController.deleteOneUser)
routes.delete('/api/v1/users/', UserController.deleteAllUser)

module.exports = routes
const express = require('express')
const todoRoute = require('../controllers/todo.controller')
const loginRoute = require('../controllers/login.controller')

const authMiddleware = require('../middlewares/auth.middleware')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({ message: 'Hello world' })
}) 

router.post('/login', loginRoute.login)

router.get('/todo', authMiddleware.isAuthenticate, todoRoute.listTodo)
router.post('/todo', authMiddleware.isAuthenticate, todoRoute.insertTodo)
router.put('/todo/:id', authMiddleware.isAuthenticate, todoRoute.updateTodo)
router.delete('/todo/:id', authMiddleware.isAuthenticate, todoRoute.deleteTodo)

module.exports = router
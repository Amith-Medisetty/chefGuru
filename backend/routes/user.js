

const express = require('express')
const {signupUser, loginUser,generate,getMessages} = require('../controllers/userController')
// const {signupUser, loginUser, generate, getMessages} = require('../controllers/userController')

const router = express.Router()

//login
router.post('/login',loginUser)

//signup
router.post('/signup',signupUser)

router.post('/generate', generate);
router.get('/get-messages',getMessages)

module.exports = router

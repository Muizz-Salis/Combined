const express = require('express')
const { signUp,signUpPost ,signIn, signInPost,dashboard, verified,sendMail,user} = require('../controllers/user.controller')
const router = express.Router()

router.get('/signup',signUp)
router.post('/signup',signUpPost)
router.get('/signin',signIn)
router.post('/signin',signInPost)
router.get('/dashboard',dashboard)
router.get('/verifyUser', verified)
router.get('/sendMail', sendMail)






module.exports = router
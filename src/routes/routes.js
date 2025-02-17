const {Router} = require('express');
const router = Router();

const {getUsers,createUser}= require('../controllers/index.controller')

router.get('/users',getUsers)
router.post('/createuser',createUser)


module.exports = router;


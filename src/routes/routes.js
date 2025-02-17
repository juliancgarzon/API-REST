const {Router} = require('express');
const router = Router();

const {getUsers,getUsersbyid,createUser,deleteUser}= require('../controllers/index.controller')

router.get('/users',getUsers)
router.get('/users/:id',getUsersbyid)
router.post('/createuser',createUser)
router.delete('/deleteuser/:id',deleteUser)


module.exports = router;


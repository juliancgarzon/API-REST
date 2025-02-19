const {Router} = require('express');
const router = Router();

const {getUsers,getUsersbyid,createUser,deleteUser, updateUser}= require('../controllers/index.controller')

router.get('/users',getUsers)
router.get('/users/:id',getUsersbyid)
router.post('/createuser',createUser)
router.delete('/deleteuser/:id',deleteUser)
router.put('/updateuser/:id',updateUser)


module.exports = router;


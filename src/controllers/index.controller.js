const { Pool } = require("pg");

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '',
    database: 'firstapi',
    port:'5432'
});

const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM clientes');
    res.status(200).json(response.rows);
};

const getUsersbyid = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM clientes WHERE id = $1', [id]);
    res.json(response.rows);
};

const createUser = async ( req, res) => {
    const { nombre , email , telefono , direccion}= req.body;
    
    const response = await pool.query('INSERT INTO clientes (nombre, email, telefono, direccion) VALUES ($1, $2, $3, $4)', [nombre,email,telefono,direccion]);
    console.log(response);
    res.json({
        message : 'User Added Succesfully',
        body:{
            user:{nombre,email,telefono,direccion}
        }
    })
};

const updateUser =async ( req, res) => {
    const id = req.params.id;
    const { nombre , email , telefono , direccion}= req.body;
    const response = await pool.query('UPDATE clientes SET nombre = $1,email = $2,telefono = $3, direccion=$4 WHERE id = $5',[nombre,email,telefono,direccion,id]);
    console.log(response);
    res.json('User Updatep succesfully');
};

const deleteUser = async ( req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM clientes WHERE id = $1', [id]);
    console.log(response);
    res.json(`USER ${id} deleted succesfully`);
};


module.exports= {
    getUsers,
    getUsersbyid,
    createUser,
    deleteUser,
    updateUser
}
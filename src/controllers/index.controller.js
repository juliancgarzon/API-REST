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

module.exports= {
    getUsers,
    createUser
}
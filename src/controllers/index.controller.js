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
    console.log(response.rows);
    //res.send('users');
    res.status(200).json(response.rows);
}

module.exports= {
    getUsers
}
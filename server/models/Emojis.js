const mysql = require('./mysql');

const PREFIX = process.env.MYSQL_TABLE_PREFIX || 'EX_Fall_2020_';

async function getAll(){
    console.log("Called Get All")
    const sql = `SELECT Name, Description FROM ${PREFIX}Emojis`
    return await mysql.query(sql);
}

async function getForPost(post_id){
    const sql = `SELECT Name, Description FROM ${PREFIX}Emojis WHERE P.Post_id = ?`
    return await mysql.query(sql, [post_id]);
}

async function get(id){
    const sql = `SELECT 
        *
    FROM ${PREFIX}Emojis WHERE id=?`;
    const rows = await mysql.query(sql, [id]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such emoji" };
    return rows[0];
}

async function add( Name, Description, Code, Type_id){
    const sql = `INSERT INTO ${PREFIX}Emojis (created_at, Name, Description, Code, Type_id) VALUES ? ;`;
    const params = [[new Date(), Name, Description, Code, Type_id]];
    const res = await mysql.query(sql, [params]);
    return get(res.insertId);
}

async function update(Name, Description, Code, Type_id){
    const sql = `UPDATE ${PREFIX}Emojis SET ? WHERE id = ?;`;
    const params = { Name, Description, Code, Type_id};
    const res = await mysql.query(sql, [params, id]);
    return get(res.insertId);
}

async function remove(id){
    const sql = `DELETE FROM ${PREFIX}Emojis WHERE id = ?`;
    return await mysql.query(sql, [id]);
}

const search = async q => await mysql.query(`SELECT id, Name FROM ${PREFIX}Emojis WHERE Text LIKE ? ; `, [`%${q}%`]);

module.exports = { getAll, get, add, update, remove, search, getForPost }
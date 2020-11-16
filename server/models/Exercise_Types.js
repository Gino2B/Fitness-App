const bcrypt = require('bcrypt');
const mysql = require('./mysql');
const cm = require('./ContactMethods');

const PREFIX = process.env.MYSQL_TABLE_PREFIX || 'Fall2020_';
const SALT_ROUNDS = process.env.SALT_ROUNDS || 8;
const Types = { Endurance: 7, Balance: 8, Strength: 9, Flexibility: 10 };

async function getAll(){
    //throw { status: 501, message: "This is a fake error" }
    //await Promise.resolve()
    console.log("Called Get All")
    return await mysql.query(`SELECT * FROM ${PREFIX}Exercise_Types`);
}

async function get(id){
    const rows = await mysql.query(`SELECT * FROM ${PREFIX}Exercise_Types WHERE id=?`, [id]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such exercise" };
    return rows[0];
}

async function getTypes(){
    return await mysql.query(`SELECT id, Name FROM ${PREFIX}Types WHERE Type_id = 5`);
}

async function add(Name, Type, Muscle_Group, Video_Url,Relative_Dificulty){
    const sql = `INSERT INTO ${PREFIX}Exercise_Types (created_at, Name, Type, Muscle_Group, Video_Url,Relative_Dificulty) VALUES ? ;`;
    const params = [[new Date(), Name, Type, Muscle_Group, Video_Url, Relative_Dificulty]];
    return await mysql.query(sql, [params]);
}

async function update(id, Name, Type, Muscle_Group, Video_Url,Relative_Dificulty){
    const sql = `UPDATE ${PREFIX}Exercise_Types SET ? WHERE id = ?;`;
    const params = { Name, Type, Muscle_Group, Video_Url,Relative_Dificulty };
    return await mysql.query(sql, [params, id]);
}

async function remove(id){
    const sql = `DELETE FROM ${PREFIX}Exercise_Types WHERE id = ?`;
    return await mysql.query(sql, [id]);
}


const search = async q => await mysql.query(`SELECT id, Name, Type FROM ${PREFIX}Users WHERE Type LIKE ? OR Name LIKE ?; `, [`%${q}%`, `%${q}%`]);

module.exports = { getAll, get, add, update, remove, getTypes, search, }
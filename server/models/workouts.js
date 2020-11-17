/* B"H
*/
const mysql = require('./mysql');
const PREFIX = process.env.MYSQL_TABLE_PREFIX || 'Fall2020_';
const Types = { PUSHUPS: 'Pushups', PULLUPS: 'Pullups', CURLS: 'Curls', PLANKS: 'Planks', RUNNING: 'Running'};

async function getAll(){
    //throw { status: 501, message: "This is a fake error" }
    //await Promise.resolve()
    console.log("Called Get All")
    return await mysql.query(`SELECT * FROM ${PREFIX}workouts`);
}

async function get(id){
    const rows = await mysql.query(`SELECT * FROM ${PREFIX}workouts WHERE id=?`, [id]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such workout" };
    return rows[0];
}

async function getTypes(){
    return await mysql.query(`SELECT id, Name FROM ${PREFIX}Types WHERE Type_id = 6`);
}

async function add(Owner_id,Privacy_Setting,Start_Time, End_Time, Exercise_Type, Note, Distance, Sets, Reps_Per_Set, Weight){
    const sql = `INSERT INTO ${PREFIX}workouts (created_at, Owner_id,Privacy_Setting,Start_Time, End_Time, Exercise_Type, Note, Distance, Sets, Reps_Per_Set, Weight) VALUES ? ;`;
    const params = [[new Date(), Owner_id,Privacy_Setting,Start_Time, End_Time, Exercise_Type, Note, Distance, Sets, Reps_Per_Set, Weight]];
    return await mysql.query(sql, [params]);
}

async function update(id, Owner_id,Privacy_Setting,Start_Time, End_Time, Exercise_Type, Note, Distance, Sets, Reps_Per_Set, Weight){
    const sql = `UPDATE ${PREFIX}workouts SET ? WHERE id = ?;`;
    const params = { Owner_id,Privacy_Setting,Start_Time, End_Time, Exercise_Type, Note, Distance, Sets, Reps_Per_Set, Weight};
    return await mysql.query(sql, [params, id]);
}

async function remove(id){
    const sql = `DELETE FROM ${PREFIX}workouts WHERE id = ?`;
    return await mysql.query(sql, [id]);
}

const search = async q => await mysql.query(`SELECT id, Value FROM ${PREFIX}workouts WHERE Value LIKE ?; `, [`%${q}%`]);

module.exports = { getAll, get, add, update, remove, getTypes, search }
const db = require('../../config/db') 

function insertTodo(req, res) {
    let data = req.body

    let insertQuery = `INSERT INTO todo (description) VALUES (?);`
    db.query(insertQuery, data.description, function (error, results, fields) {
        if (error) throw error;
    });

    res.send({ message: 'Data has been inserted', data: data })
}

async function listTodo(req, res) {
    let selectQuery = `SELECT * FROM todo`

    let result = await db.query(selectQuery, function (error, results, fields) {
        if (error) throw error;
    });
    res.send({ message: 'Data is found', data: results })
}

function updateTodo(req, res) {
    let updateQuery = `UPDATE todo SET description = ? WHERE id = ?`
    let data = [req.body.description, req.params.id]  
    
    db.query(updateQuery, data, function (error, result, fields) {
        if (error) throw error;
    });

    res.send({ message: 'Data has been updated', data: req.body })
}

function deleteTodo(req, res) {
    let deleteQuery = `DELETE FROM todo WHERE id = ?`
    let data = [req.params.id]
    db.query(deleteQuery, data, function (err, deleted) {
        if (err) throw err;
    });

    res.send({ message: 'Data has been deleted' })
}

module.exports = {
    insertTodo,
    listTodo,
    updateTodo,
    deleteTodo
}
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./ws.db');

db.serialize(function() {
    // Criar uma tabela 
    // db.run(`
    // CREATE TABLE IF NOT EXISTS ideas(
    //     id INTEGER PRIMARY KEY AUTOINCREMENT,
    //     image TEXT,
    //     title TEXT,
    //     category TEXT, 
    //     description TEXT, 
    //     link TEXT
    //     );
    // `)
    // // Enserir dado na tabela 
    //     const query = `
    //     INSERT INTO ideas(
    //         image,
    //         title,
    //         category,
    //         description,
    //         link
    //     ) VALUES(?,?,?,?,?);
    //     `
    //     const values =  [
    //         "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    //         "Cursos de programação",
    //         "Estudo",
    //         "A beleza ideal está na simplicidade calma e serena.",
    //         "https://felipeagomes.github.io/"
    //    ]


    //     db.run(query, values, function(err) {
    //         if (err) return console.log(err)

    //         console.log(this)
    //     });

    // Deletar dado na tabela 
    //    db.run(`DELETE FROM ideas WHERE id = ?`, [5], function (err) {
    //        if (err) return console.log(err)

    //        console.log("Deletei", this)
    //    });

    // Consultar dado na tabela 
    //    db.all(`SELECT * FROM ideas`, function(err, rows) {
    //        if (err) return console.log(err)

    //        console.log(rows)
    //    });

});

module.exports = db
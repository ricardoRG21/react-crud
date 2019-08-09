const sql = require('./db.js');
module.exports = (app)=>{
    app.route('/crud/add').post((req,res)=>{
        let query = `insert into usuario(nombre,apellidop,apellidom) values('${req.body.nombre}','${req.body.apellidop}','${req.body.apellidom}');`;
        sql.query(query, function (err, resdos) {
                
            if(err) {
                console.log("error: ", err);
                res.end();
            }
            else{
                console.log(res.insertId);
                res.end();
            }
        })
    });

    app.route('/crud').get((req,res)=>{
        let query = `select * from usuario`;
        sql.query(query, function (err, rows, fields) {
                
            if(err) {
                console.log("error: ", err);
                res.sendStatus(500);
                return;
            }
            res.json(rows);
        })
    });
}

const sql = require("mssql");


var Database = function(){
    const connStr = "Provider=SQLOLEDB.1;Password=EuSouALenda;Persist Security Info=True;User ID=sa;Initial Catalog=ML_API;Data Source=DESKTOP-80IE6M4";
    let connection
    
    let connect = function(){
        sql.connect(connStr)
                    .then( (function(){
                                return function(conn){
                                    console.log("Conectado")
                                    connection = conn
                                }
                            })())
                    .catch(err => console.log(err));
    }
    let exec =  function(query, res){
        connection.request()
        .query(query)
                    .then(result => res.json(result.recordset))
                    .catch(err => res.json(err));
    }

    connect();
    
    let db = {
        exec: exec,
    }
    return db
}


module.exports = Database()



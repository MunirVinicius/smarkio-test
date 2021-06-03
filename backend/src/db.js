let mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'smarkio'
})

connection.connect(function(error){
    if(!error){
        return error
    }
});


function read(){
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM comments', function(error,rows, fields){
            if(error){
                reject(error);
            }
            else{
                const results = rows;
                resolve(results);
            }
        });
    })    
}

function create(txt, audio){
    connection.query(`INSERT INTO comments SET ?`,{txt, audio} ,  function (error, results, fields) {
        if(!error){
             console.log('Error in the insert')
        }
    });
}

 module.exports = {read, create}
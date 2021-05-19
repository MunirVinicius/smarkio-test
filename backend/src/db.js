let mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'smarkio'
})

connection.connect(function(error){
    if(!!error){
        console.log('Error');
    }
    else{
        console.log('Connected');
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
                // console.log(rows)
                resolve(results);
            }
        });
    })    
}




// function read(){
//     connection.query('SELECT * FROM comments', function(error,rows, fields){
//         if(error){
//              console.log('Error in the query')
//         }
//         else{
//             const data = rows;
//             return data;
//         }
//     });
// }

read()

function create(id,txt, audio){
    connection.query(`INSERT INTO comments SET ?`,{id, txt, audio} ,  function (error, results, fields) {
        if(!!error){
             console.log('Error in the insert')
        }
    });
}

 module.exports = {read, create}
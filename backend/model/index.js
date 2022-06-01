const connection = require('../config/dbConfig');
exports.insert = (body)=>{
    console.log(body);
    let promise = new Promise((resolve,  reject)=>{

        resolve( connection.execute(
            'INSERT INTO user_info (name, phone, email, subject, message) VALUES(?,?,?,?,?)',[body.fullname,body.phone,body.email,body.subject,body.message]
        ));
    })

    return promise;
}
// console.log(body);
// try{
//     connection.execute(
//         'INSERT INTO user_info (name, phone, email, subject, message) VALUES(?,?,?,?,?)',['ahmad','12345','jsfsfsfsf','jshfffs','jfhgefvhevfff']
//     )
// }catch(e){
//     console.log('error:',e);
// }
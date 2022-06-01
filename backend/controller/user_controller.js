const postData = require('../model/index');
 exports.insertData = (req,res,next)=>{
    postData.insert(req.body).then((result)=>{
       res.status(200).send('ok');
    }).catch(e=>{
        console.log(e);
    });
}

exports.Resume = ((req,res)=>{

    res.download("Amir13-CV.pdf","Amir13-CV.pdf");
})
const {fileModel} = require('../Model/fileModel')
const path = require('path')
const fileUplod = require('express-fileupload')





const postFile =  async (req, res) =>{
     try{
        let filename = Date.now()+"-"+req.files.file.name
        let newPath = path.join(process.cwd(),'public' ,filename)
       let postFiles = req.files.file.mv(newPath)
   
        const result = await fileModel({
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            file: {
                   data: filename,
                   contentType: 'image/png'
            }
            
        })
        if(result){
             await result.save(result)
          return res.status(200).json({'messege': 'success'})
        }
        else{
            throw Error('error')
        }
     }
     catch(err){
        console.log(err)
     }
}

module.exports = {
    postFile: postFile
}
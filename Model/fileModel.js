const mongoose = require('mongoose');

const {Schema} = mongoose;

const fileSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: { 
        type: String, 
        required: true
    },
        file:{
            data: String,
            contentType: String
        }
})

const fileModel = mongoose.model('FileCollection', fileSchema)

module.exports = {fileModel}
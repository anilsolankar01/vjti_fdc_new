const multer = require('multer');
const path = require('path')

function checkFileType(file, cb){
    return cb(null,true);
}

var uploader = multer({
    storage: multer.diskStorage(
        {
            destination: './uploads/',
            filename: function ( req, file, cb ) {
                //req.body is empty...
                //How could I get the new_file_name property sent from client here?
                cb( null, file.originalname+ '-' + Date.now()+".pdf");
            }
        }
    )
})

module.exports = uploader;
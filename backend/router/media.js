const router = require('express').Router()
const multer = require('multer')

let storage = multer.diskStorage({
    destination:function(req,file,cb) {
        cb(null,'media')
    },
    filename:function(req,file,cb) {
        cb(null, file.originalname)
    }
})

let upload = multer({ storage:storage }).single('file')

router.post('/',(req,res) => {
    console.log(req)
    upload(req,res,function(err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        return res.status(200).send(req.file)
    })
})



module.exports = router
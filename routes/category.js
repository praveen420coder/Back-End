import express from 'express';
import { adminMiddleware, signinRequired } from '../common-middleware/index.js';
import { addCategory ,getCategory} from '../controller/category.js';

import multer from 'multer';
import shortid from 'shortid';
// import path from 'path'

const router = express.Router();


const storage = multer.diskStorage({
    destination : function (req,file,cb){
        cb(null,'uploads/')
    },
    filename: function(req,file,cb){
        cb(null,shortid.generate() + '-' + file.originalname)
    }
})
const upload = multer({ storage });


router.post('/category/create',signinRequired,adminMiddleware,upload.single('categoryImage'),addCategory);
router.get('/category/getcategory',getCategory);





export default router;
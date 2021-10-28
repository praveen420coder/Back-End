import express from 'express';
import { adminMiddleware, signinRequired } from '../common-middleware/index.js';
import { createProduct } from '../controller/product.js';
// import { addCategory ,getCategory} from '../controller/category.js';
import product from '../models/product.js';
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
router.post('/product/create',signinRequired,adminMiddleware,upload.array('productPicture'),createProduct);
// router.get('/product/getcategory',getCategory);





export default router;
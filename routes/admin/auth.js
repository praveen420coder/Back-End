import express from 'express';
import { validateSignupRequest, isRequestValidated, validateSigninRequest } from '../../validators/auth.js'
import { signup ,signin} from '../../controller/admin/auth.js'
const router = express.Router();



router.post('/admin/signup',validateSignupRequest,isRequestValidated,signup );

router.post('/admin/signin',validateSigninRequest,isRequestValidated,signin );





export default router;
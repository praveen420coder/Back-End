import express from "express";
import {
  validateSignupRequest,
  isRequestValidated,
  validateSigninRequest,
} from "../../validators/auth.js";
import { signup, signin, signout } from "../../controller/admin/auth.js";
import { signinRequired } from "../../common-middleware/index.js";
const router = express.Router();

router.post("/admin/signup", validateSignupRequest, isRequestValidated, signup);
router.post("/admin/signin", validateSigninRequest, isRequestValidated, signin);
router.post("/admin/signout", signinRequired, signout);

export default router;

import express from 'express';
import {
  addItemToCart
} from "../controller/cart.js";
import { signinRequired ,userMiddleware } from "../common-middleware/index.js";
const router = express.Router();

router.post(
  "/user/cart/addtocart",
  signinRequired,
  userMiddleware,
  addItemToCart
);
// //router.post('/user/cart/addToCartByLogin', requireSignin, userMiddleware, addToCart);
// router.post("/user/getCartItems", signinRequired, userMiddleware);
// //new update
// router.post(
//   "/user/cart/removeItem",
//   signinRequired,
//   userMiddleware,
//   removeCartItems
// );

export default router
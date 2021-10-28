import dotenv from 'dotenv';
import express, { application } from 'express';
import path from 'path';


import Connection from './database/db.js';
import authRoutes from './routes/auth.js';
import adminRoutes from './routes/admin/auth.js';
import categoryRoutes from './routes/category.js'
import productRoutes from './routes/product.js'
import cartRoutes from './routes/cart.js'
dotenv.config();


const app = express();

const username = process.env.MONGO_DB_USER;
const password = process.env.MONGO_DB_PASSWORD;
const database = process.env.MONGO_DB_DATABASE;

Connection(username, password,database);

app.use(express.json());
app.use('/public',express.static('uploads/'));

app.use('/api' ,authRoutes);
app.use('/api' ,adminRoutes);
app.use('/api' ,categoryRoutes);
app.use('/api' ,productRoutes);
app.use('/api' ,cartRoutes);

app.listen(process.env.PORT,() => {
    console.log(`listening on port ${process.env.PORT}`);
});
import mysql from 'mysql2/promise';
import { promisePool } from './connectionPool.js';
import dotenv from 'dotenv';
dotenv.config();


// fetches all products from the database using pool connection and returns the result
async function getProducts() {
    // const connection = await pool.getConnection();
    try{
    const [rows] = await promisePool.execute('SELECT * FROM sql5761520.products');
    // connection.release();
    return rows;
    } catch (e) {
        console.log(e);
        throw e;
    } 
    // finally {
    //     promisePool.release();
    // }
}

const data = await getProducts();
console.log(data);

export default getProducts;
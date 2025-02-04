import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import mysql from "mysql2/promise";
import { promisePool } from "./database/connectionPool.js";
import getProducts from "./database/databaseQueries.js";

const port = process.env.PORT || 3004;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

// path to the index.html file
const htmlPath = path.join(__dirname, "../../dist/index.html");

//serves the static files from the dist folder
app.use(express.static(path.resolve(__dirname, "../../dist")));
app.use(express.static(path.resolve(__dirname, "../../public")));

// allows cross-origin requests (backend runs on localhost:8080, frontend on localhost:5173)
app.use(cors());


//Handles GET requests to return the product list as JSON.
app.get("/api/products", async (req, res) => {
  // const connection = await pool.getConnection(); // get a connection from the pool
  // const [rows] = await promisePool.query("SELECT * FROM ProductsDB.Products"); // execute the query
  const rows = await getProducts();
  res.json(rows); // send the response
});

//draws our index.html file on localhost:8080
app.get("*", (req, res) => {
  res.sendFile(htmlPath); // send the index.html file
});

// port 8080 is the default port for http requests
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
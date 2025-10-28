import express from 'express';
import mysql from 'mysql2/promise';

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

//for Express to get values using POST method
app.use(express.urlencoded({extended:true}));

//setting up database connection pool
const pool = mysql.createPool({
    host: "l3855uft9zao23e2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "ppqeua5ee1hdp3d3",
    password: "vup1zqenlo9pyyzd",
    database: "nw8yehtc787o17b6",
    connectionLimit: 10,
    waitForConnections: true
});
const conn = await pool.getConnection();

//routes
app.get('/', (req, res) => {
   res.render("home.ejs")
});

app.get("/allQuotesAlphabetical", async(req, res) => {
    let sql = "SELECT quoteId, quote, likes FROM `quotes` ORDER BY quote";
    const [rows] = await conn.query(sql);
    res.render("quotes.ejs", {result: rows});
});//dbTest

app.get("/quotesWithLife", async(req, res) => {
    let sql = "SELECT quoteId, quote, likes FROM `quotes` WHERE quote LIKE '%life%'";
    const [rows] = await conn.query(sql);
    res.render("quotes.ejs", {result: rows});
});//dbTest

app.get("/quotesLikes", async(req, res) => {
    let sql = "SELECT * FROM `quotes` WHERE likes < 100 and likes > 50;";
    const [rows] = await conn.query(sql);
    res.render("quotes.ejs", {result: rows});
});//dbTest

app.get("/quotesTop3", async(req, res) => {
    let sql = "SELECT * FROM `quotes` ORDER BY `likes` DESC limit 3;";
    const [rows] = await conn.query(sql);
    res.render("quotes.ejs", {result: rows});
});//dbTest

app.get("/authorPortrait", async(req, res) => {
    let sql = "SELECT portrait FROM `authors`;";
    const [rows] = await conn.query(sql);
    res.render("author.ejs", {result: rows});
});//dbTest

app.get("/quotesLeast10", async(req, res) => {
     let sql = "SELECT * FROM `quotes` ORDER BY `likes` ASC limit 10;";
    const [rows] = await conn.query(sql);
    res.render("quotes.ejs", {result: rows});
});//dbTest

app.get("/quotesWithFreedom", async(req, res) => {
    let sql = "SELECT quoteId, quote, likes FROM `quotes` WHERE quote LIKE '%Freedom%'";
    const [rows] = await conn.query(sql);
    res.render("quotes.ejs", {result: rows});
});//dbTest

app.get("/quotesWithMotivational", async(req, res) => {
    let sql = "SELECT quoteId, quote, likes FROM `quotes` WHERE category LIKE '%Motivational%'";
    const [rows] = await conn.query(sql);
    res.render("quotes.ejs", {result: rows});
});//dbTest

app.get("/quotesWithInspirational", async(req, res) => {
    let sql = "SELECT quoteId, quote, likes FROM `quotes` WHERE category LIKE '%Inspirational%'";
    const [rows] = await conn.query(sql);
    res.render("quotes.ejs", {result: rows});
});//dbTest


app.listen(3000, ()=>{
    console.log("Express server running")
})
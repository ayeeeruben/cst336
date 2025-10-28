import express from 'express';
const quotes = (await import("success-motivational-quotes")).default;
const app = express();
app.set("view engine", "ejs");

//folder for the images and css static files
app.use(express.static("public"));

//routes
//root route
app.get('/', (req, res) => {
    let famousQuote = quotes.getTodaysQuote()
    console.log(famousQuote);
    res.render("home.ejs", {quotes})
});

//starts the web server
app.listen(3000, () => {
   console.log('server started');
});
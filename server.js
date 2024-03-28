const express = require("express");
const dotenv = require("dotenv").config();
//const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const cors = require("cors");

const port = 8080;

connectDb();

const app = express();


app.use(cors({ origin: 'http://localhost:3000' }))

app.use(express.json());
//app.use(errorHandler);
app.use("/api/models/all" , require("./routes/personroutes"));
app.use("/api/models/all/search" , require("./routes/searchroutes"));


app.listen(port , ()=>{
    console.log(`server running on port ${port}`);
    
});

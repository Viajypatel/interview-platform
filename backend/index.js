const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const dbConnect=require("./config/database");
const app = express();
const submissionRoutes = require('./routes/submissionRoutes');
const authRoutes = require('./routes/authRoutes');
const errorMiddleware = require("./middleware/errorMiddleware");
const PORT=process.env.PORT||5000;
app.use(express.json());
dbConnect();


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/submissions', submissionRoutes);

app.use(errorMiddleware);


app.get("/",(req,res)=>{

     res.send("Hi from server");
})

app.listen(4000,()=>{

     console.log(`Server is running on PORT ${PORT}`);
})
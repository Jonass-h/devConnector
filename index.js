const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const users =require("./routes/api/users");
const profile =require("./routes/api/profile");
const posts =require("./routes/api/posts");


dotenv.config();
const app = express();
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
},()=>{
  console.log(" db connected !! ")
});


app.get("/", (req, res) => {
  res.send("Hello from API ");
});
app.use('/api/users',users);
app.use('/api/profile',profile);
app.use('/api/posts',posts);



const port = process.env.PORT || 2000;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

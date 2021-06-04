const express = require('express');
const cors = require('cors');
const db = require('./db/db');

const app = express();

//routers
const home = require("./routers/routes/home");
const login = require("./routers/routes/auth/login");


//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

//app routers
app.use(home);

//login router
app.use("/login", login);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});

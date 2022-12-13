const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/openai', require('./routes/openaiRoutes'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

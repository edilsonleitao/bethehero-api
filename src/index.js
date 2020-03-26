const express = require('express');

require('dotenv').config();

const app = express();
const { PORT } = process.env;

app.get('/', (request, response) => response.send('hello bethehero on nodejs'));

app.listen(PORT, () => console.log(`Server initialized on port: ${PORT}`));

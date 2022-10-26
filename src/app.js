const express = require('express');

const { handleError } = require('./middlewares');

const authRouter = require('./routes/auth.router');

// ...

const app = express();

app.use(express.json());

app.use('/login', authRouter);

app.use(handleError);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;

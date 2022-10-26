const express = require('express');

const { handleError } = require('./middlewares');

const authRouter = require('./routes/auth.router');

const userRouter = require('./routes/user.router');

const categoryRouter = require('./routes/category.router');

// ...

const app = express();

app.use(express.json());

app.use('/login', authRouter);

app.use('/user', userRouter);

app.use('/categories', categoryRouter);

app.use(handleError);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;

// external module
const express=require('express');

const homeRouter = require('./router/homeRouter');
const contactRouter = require('./router/contactRouter');
const errorRouter = require('./router/errorRouter');
const app=express();

// Local module
app.use(homeRouter);
app.use(contactRouter);
app.use(errorRouter);

const PORT=3001;
app.listen(PORT,()=>console.log(`server is running at port http://localhost:${PORT}`));
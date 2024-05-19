// import
const express = require('express');
const cors = require('cors');

// initialize
const app = express();

const userRouter = require('./routers/userRouter');
const extensionRouter = require('./routers/extensionRouter');
const utilRouter = require('./routers/utilRouter');

// middleware
app.use(cors({
    origin: ['http://localhost:3000']
}));

app.use(express.json());

app.use('/user', userRouter);
app.use('/extension', extensionRouter);
app.use('/util', utilRouter);

app.use(express.static('./static'));

const port = 5000;

app.get('/', (req, res) => {
    res.send('response from express');
});

app.get('/add', (req, res) => {
    res.send('response from add route');
})

app.listen(port, () => { console.log('express server started now') });
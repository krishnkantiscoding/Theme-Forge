const mongoose = require('mongoose');

const url = "mongodb+srv://krishna:qwerty123@cluster0.tcw88za.mongodb.net/themeforge?retryWrites=true&w=majority&appName=Cluster0";

// asynchronous function
mongoose.connect(url)
.then((result) => {
    console.log ('database connected');

})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;
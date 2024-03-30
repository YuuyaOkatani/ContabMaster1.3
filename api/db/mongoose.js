const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true })
.then(() => {
    console.log('Connected to MongoDB successfully :)');

}).catch((e) => {
    console.log(e)
});

mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)

module.exports = {
    mongoose
}
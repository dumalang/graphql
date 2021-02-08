import mongoose from 'mongoose';

// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/contacts', {
    useNewUrlParser: true,
});

export {
    mongoose
}
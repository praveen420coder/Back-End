import mongoose from 'mongoose';

const Connection = async (username, password,database) => {
    
    const URL = `mongodb+srv://${username}:${password}@cluster0.0hdif.mongodb.net/${database}?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;
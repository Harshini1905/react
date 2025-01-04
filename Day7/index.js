import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/userRoute.js';

const app = express();

app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

app.use('/api/user', router);

mongoose.connect(MONGOURL)
        .then(() => {
         console.log('Database connected');
         app.listen(PORT, () => {
         console.log(`Server is running on port ${PORT}`);
});
})
.catch((error) => { 
console.log('Error:', error.message);
});
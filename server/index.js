import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import postRoutes from './routes/posts.js';

const app = express(); // Initializing express

app.use(bodyParser.json({limit: '30mb'})); // Only accept upto 30MB of data in req.body (for image uploads)
app.use(bodyParser.urlencoded({limit: '30mb', extended: true})); // for wide variety of data types; not limited to strings
app.use(cors()); // enabling cors

const CONNECTION_URL = 'mongodb+srv://raazsanz9:QbgW3LX5xkpKfUzJ@cluster0.zr0vq.mongodb.net/Cluster0?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    }))
    .catch(error => {
        console.log(error);
    });

app.use('/posts', postRoutes);

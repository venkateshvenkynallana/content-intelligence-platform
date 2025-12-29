import express from 'express';
import mongoose from 'mongoose';


mongoose.connect('mongodb://localhost/articles');


const app = express();
app.use(express.json());

app.use('/api/articles', require('./routes/articleRoutes'));

app.listen(5000);
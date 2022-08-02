const express = require('express');
const  blogRoutes = require('./routes/blogRoutes')
const storyRoutes = require('./routes/storyRoutes')
const userRoutes = require('./routes/userRoutes')
const poleRoutes = require('./routes/poleRoutes')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')
 
//Init App
  
const corsOpts = {
    origin: '*',
    credentials: true,
    methods: ['GET','POST','HEAD','PUT','PATCH','DELETE'],
    allowedHeaders: ['Content-Type'],
    exposedHeaders: ['Content-Type'],
    credentials: true, 
    origin: true
};
const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOpts));

//Db Connection

const dbURI = 'mongodb+srv://XFusional:cc1ss7abc@blogcluster.dvlp2.mongodb.net/blogs?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3001))
  .then(() => console.log('Server Started'))
  .catch(err => console.log(err));



//Routes
app.use('/blogs', blogRoutes);
app.use('/user', userRoutes);
app.use('/story', storyRoutes);
app.use('/pole', poleRoutes);

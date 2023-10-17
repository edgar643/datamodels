import express from 'express';
import colors from 'colors';

import dotenv from 'dotenv';
import modelRoutes from './routes/modelRoutes.js'
 
dotenv.config()

const app = express();

const PORT = process.env.PORT;

app.use('/api/models/', modelRoutes)

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} and listening on PORT ${PORT}`.blue)
  })

app.get('/', (req, res) => {
    res.send('API is running...')
})


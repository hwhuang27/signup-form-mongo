import express from 'express';
import path from 'path';
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

import mongoose from 'mongoose';
import moment from 'moment';
import { creds } from './secrets.js';
import User from './public/User.js';
mongoose.connect(creds);

// const user = await User.create({
//     firstName: 'David1',
//     lastName: 'Huang1',
//     email: 'david1@gmail.com',
//     password: 'mypassword',
//     createdAt: moment().format()
// })
// console.log(user);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/public', require('./public'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
import express from 'express';
import mongoose from 'mongoose';
import Users from './model/users.js';
import moment from 'moment';
import path from 'path';
import creds from 'secrets';
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// mongoose.connect(creds);
// const user = await Users.create({
//     firstName: 'David',
//     lastName: 'Huang',
//     email: 'david.huang3214@gmail.com',
//     password: 'mypassword',
//     createdAt: moment().format()
// })
// console.log(user);

//app.use(express.static(path.join(__dirname, 'public')));

app.use('/public', require('./public'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
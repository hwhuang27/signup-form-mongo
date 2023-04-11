import express from 'express';
import mongoose from 'mongoose';
import Users from './model/users.js';
import moment from 'moment';
import path from 'path';
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();

// mongoose.connect("mongodb+srv://davidhuang3214:RlP8uy9qFwdnRbPV@cluster0.mcdvnnp.mongodb.net/test")
// const user = await Users.create({
//     firstName: 'David',
//     lastName: 'Huang',
//     email: 'david.huang3214@gmail.com',
//     password: 'mypassword',
//     createdAt: moment().format()
// })
// console.log(user);

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
import mongoose from 'mongoose';
import moment from 'moment';
const { Schema, model } = mongoose;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    createdAt: Date
});

const users = model('users', userSchema);
export default userSchema;
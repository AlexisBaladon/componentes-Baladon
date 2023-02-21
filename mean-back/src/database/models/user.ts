import * as mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now },
});

const userModel = mongoose.model('User', UserSchema);

export default userModel;
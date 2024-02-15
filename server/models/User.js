import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        fullName : {
            type: String,
            required: true,
            min: 5,
            max: 50,
        },
        email : {
            type: String,
            required: true,
            unique: true,
            max: 50,
        },
        password : {
            type: String,
            require: true,
            min: 8,
        },
    },
    {timestamps: true}
);

const User = mongoose.model("User", UserSchema);
export default User;
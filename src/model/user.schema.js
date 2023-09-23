import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'], //Name is mondatory , If not abailable it will mot save and send the message name is required.
            maxLength:[50,'Name should be less than 50 characters']
        },
        email:{
            type:String,
            unique:true
        },
        size: String,
        password: String,
        age: Number
    }
);

export default mongoose.model('User', userSchema)
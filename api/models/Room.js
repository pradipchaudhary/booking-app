import mongoose, { Schema } from "mongoose";

const RoomSchema = new Schema({
    name:{
        type:String,
        require : true
    }
})

export default RoomSchema;
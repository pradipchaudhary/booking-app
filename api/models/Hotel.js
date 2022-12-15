import monogoose, { Schema } from 'mongoose';

const HotelSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    type:{
        
    }
})
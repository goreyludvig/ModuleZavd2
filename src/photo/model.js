import mongoose from 'mongoose';

const photoSchema = new mongoose.Schema({
    
    name: {
        type:String,
        required: true
    },
    comment: {
        type: String
    },
    author:[String],
    published:{
        type: Date,
        max: Date.now()
    },
    tagsList: {
        type: Array
    },
    likes:{
        type:Number,
        min:0,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        }
    }
});

const Photo = mongoose.model("Photo", photoSchema);

export default Photo;
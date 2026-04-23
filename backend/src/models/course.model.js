import mongoose from "mongoose"

const CourseSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },

    image: {
        type: String,
    },
    price:{
        type: Number,
        required: true
    }
},
   {
        timestamps: true
    }
)

const Course = mongoose.model("Course", CourseSchema)

export default Course
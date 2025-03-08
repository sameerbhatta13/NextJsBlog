import mongoose from "mongoose";


const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    author_name: {
        type: String,
        required: true
    }



}, { timestamps: true })

const BlogModel = mongoose.models.blog || mongoose.model('blog', blogSchema)
export default BlogModel
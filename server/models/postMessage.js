import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

//Now we have our schema, let's turn it into a model 
const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage

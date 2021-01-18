import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    creator: String,
    image: String,
    tags: [String],
    likes: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Post = mongoose.model('Post', postSchema);

export default Post;

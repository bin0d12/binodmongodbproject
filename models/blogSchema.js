const { default: mongoose } = require("mongoose")

const db = mongoose.connection
const blog = new Schema({
    title: String,
    slug: String,
    published:  Boolean,
    content: String,
    tags: [String],
    comments: [{
        user: String,
        content: String,
        votes: Number
    }]
})
const article = new Blog({
    title: 'Awesome Post!',
   slug: 'awesome-post',
   published: true,
   content: 'This is the best post ever',
   tags: ['featured', 'announcement'],
})

article.save()

Blog.findOne({}, (err, post) => {
    console.log(post);
})

db.collection('posts').insertOne({
    title: 'Better Post!',
   slug: 'a-better-post',
   published: true,
   author: 'Ado Kukic',
   content: 'This is an even better post',
   tags: ['featured']
})

db.collection('posts').findOne({}).then((err, post) => {
    let article = new Blog(post)
})

const Blog = mongoose.model('Blog', blog)



const { model, Schema } = require('mongoose')

const User = model(
    'User',
    new Schema({
        username: String,
        email: String,
        password: String,
        roles: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Role'
            }
        ],
        posts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Post'
            }
        ]
    })
)

module.exports = User

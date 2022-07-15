const {Schema, model} = require('moongose');

const bannedUserSchema = new Schema ({

    email: {
        type: String,
    }
})

bannedUserModel.set('toJSON', {
    transform: (doc, ret) => {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
    }
})

const bannedUserModel = model('BannedUserModel', bannedUserSchema);

module.exports= bannedUserModel;
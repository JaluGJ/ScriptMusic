const {Schema, model} = require('mongoose');

const bannedUserSchema = new Schema ({

    email: {
        type: String
    },
    banID: {
        type: String
    },
})

bannedUserSchema.set('toJSON', {
    transform: (doc, ret) => {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
    }
})

const bannedUserModel = model('BannedUser', bannedUserSchema);

module.exports = bannedUserModel;
import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: [true, 'Message content is required'],
        trim: true,
        maxlength: [1000, 'Message cannot exceed 1000 characters']
    },
    messageType: {
        type: String,
        enum: ['text', 'image', 'file'],
        default: 'text'
    },
    isRead: {
        type: Boolean,
        default: false
    },
    readAt: {
        type: Date
    },
    edited: {
        type: Boolean,
        default: false
    },
    editedAt: {
        type: Date
    }
}, {
    timestamps: true
});

// Index for efficient queries
messageSchema.index({ sender: 1, receiver: 1, createdAt: -1 });

export default mongoose.model('Message', messageSchema);
const mongoose = require('mongoose');

const attachmentSchema = new mongoose.Schema({
    fileName: String,
    fileType: String,
    filePath: String, // Store the path of the uploaded file
    uploadedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Attachment', attachmentSchema);

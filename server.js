const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const Attachment = require('./models/Attachment');

const app = express();

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Ensure the 'uploads' directory exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Add a timestamp to avoid filename conflicts
  }
});

const upload = multer({ storage: storage });

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('uploads')); // Serve static files from 'uploads' directory

// File upload endpoint
app.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const { originalname, mimetype, filename } = req.file;

        // Save file details to MongoDB
        const attachment = new Attachment({
            fileName: originalname,
            fileType: mimetype,
            filePath: filename // Save the file path for future retrieval
        });

        await attachment.save();

        res.status(200).json({ message: 'File uploaded successfully' });
    } catch (error) {
        console.error('Error during file upload:', error);
        res.status(500).json({ error: 'File upload failed' });
    }
});

// Endpoint to get attachment count
app.get('/attachment-count', async (req, res) => {
    try {
        const count = await Attachment.countDocuments();
        res.status(200).json({ count });
    } catch (error) {
        console.error('Error retrieving attachment count:', error);
        res.status(500).json({ error: 'Failed to retrieve attachment count' });
    }
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/fileUploads', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB', error);
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

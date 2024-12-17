# File Upload API Backend
  This is the backend repository for a file upload application built with Node.js, Express, and MongoDB. This API allows users to upload multiple attachments and store file information in a MongoDB database. It includes endpoints to upload files and retrieve the count of uploaded files.

  ## Table of Contents 
    *  Installation
    *  Environment Variables
    *  Running the Server
    *  API Endpoints
       * Upload File
       * Get Attachment Count
    * Project Structure
    * Dependencies

## Installation
  1. Clone the repository
    ```bash
      git clone  https://github.com/sazzadurrahmaan/Seopage1-Task_Backend-part.git
      cd Seopage1-Task_Backend-part
  ### install dependencies:
    ```bash
        npm install
  ### Start MongoDB:
      Make sure MongoDB is running on your machine. If you haven’t installed MongoDB, you can follow the official installation guide.
## Environment Variables
  ### Create a .env file in the root directory to configure environment variables:
     ```bash
            PORT=5000
            MONGODB_URI=mongodb://localhost:27017/fileUploads
     
### Here 
* The port number on which the server will run.
* MONGODB_URI: The connection string for your MongoDB database.

## Running The Server 
After setting up your environment variables, start the server:
      -- npm start
 The server will start on http://localhost:5000 (or your configured PORT).

## API Endpoints
  ### upload file
    * Endpoint: POST /upload
    * Description: Upload a single file and save the file details to MongoDB
    * Request:
        *multipart/form-data with a file field containing the file to be uploaded.
    * Response:
      *200 OK: { message: 'File uploaded successfully' }
      * 500 Internal Server Error: { error: 'File upload failed' }
  ### Get Attachment Count
 * Endpoint: GET /attachment-count
 *  Description: Retrieve the count of uploaded files.
 * Response:
    * 200 OK: { count: <number> }
    * 500 Internal Server Error: { error: 'Failed to retrieve attachment count' }
  
## Project Structure 
    
    file-upload-backend/
├── uploads/              # Directory for storing uploaded files (created by multer)
├── server.js             # Main server file
├── .env                  # Environment variables
├── package.json          # Project metadata and dependencies
└── README.md             # Documentation file
## Dependencies
    *  express: Web framework for Node.js.
    *  mongoose: MongoDB object modeling tool.
    *  multer: Middleware for handling file uploads.
    *  dotenv: Loads environment variables from a .env file.
    *  cors : Middleware for handling CORS (Cross-Origin Resource Sharing).

## Here is the Frontend part of the project :
### https://github.com/sazzadurrahmaan/Scrollable-Board-Frontend
    

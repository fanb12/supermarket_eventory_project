const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Store files in the 'uploads' directory
  },
  filename: (req, file, cb) => {
    console.log("file object:", file);
    if (!file || !file.originalname) {
      console.error("Error: file or file.originalname is undefined.");
      return cb(new Error("File upload error: missing filename"));
    }
    const ext = path.extname(file.originalname);
    const filename = `${Date.now()}${ext}`; // Generate filename without "uploads"
    cb(null, filename);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;

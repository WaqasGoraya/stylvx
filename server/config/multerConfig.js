import multer from "multer";
import path from "path";
import fs from "fs";

// Define the upload path relative to the project root
const uploadPath = path.join(process.cwd(), 'public', 'uploads');

// Ensure the directory exists or create it
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
}

// Define storage configuration for multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadPath); // Use the defined upload path
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname); // Retain original file extension
        cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
    }
});

// Initialize multer with storage configuration
const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // Optional: Set file size limit (here 10MB)
    fileFilter: function (req, file, cb) {
        // Optional: Filter files by type (e.g., only images)
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed!'), false);
        }
    }
});

// Export the upload instance for global use
export default upload;

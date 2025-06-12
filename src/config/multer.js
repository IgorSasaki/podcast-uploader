const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: path.resolve(__dirname, "..", "uploads"),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const base = file.fieldname === "audio" ? "audio" : "cover";
    cb(null, `${base}-${Date.now()}${ext}`);
  },
});

module.exports = multer({ storage });

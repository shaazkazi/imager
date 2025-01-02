const express = require("express");
const multer = require("multer");
const { ExifTool } = require("exiftool-vendored");
const cors = require("cors");

const exifTool = new ExifTool();
const app = express();

app.use(cors());
const upload = multer({ dest: "uploads/" });

app.post("/api/metadata", upload.single("image"), async (req, res) => {
  try {
    const metadata = await exifTool.read(req.file.path);
    res.json(metadata);
  } catch (error) {
    res.status(500).json({ error: "Failed to extract metadata" });
  }
});

const PORT = process.env.PORT || 5000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:3000';

app.use(cors({ origin: CORS_ORIGIN }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

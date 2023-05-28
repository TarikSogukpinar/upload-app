import multer from "multer";
import path from "path";
import fs from "fs";
import axios from "axios";
import FormData from "form-data";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./files/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg") {
    cb(null, true);
  }

  if (file.mimetype === "image/png") {
    cb(null, true);
  }

  if (file.mimetype === "application/pdf") {
    cb(null, true);
  }

  cb(null, false);
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // limit file size to 5MB
  },
});

const uplodFile = async (req, res, next) => {
  try {
    if (!req.file) {
      return res
        .status(500)
        .json({ error: true, message: "Please upload a file" });
    }

    const file = fs.createReadStream(req.file.path);
    const formData = new FormData();
    formData.append("file", file);

    const result = await axios.post(
      "https://www.virustotal.com/api/v3/files",
      formData,
      {
        headers: {
          "x-apikey": process.env.VIRUS_TOTAL_API_KEY,
          ...formData.getHeaders(),
        },
      }
    );

    if (result.status === 200) {
      res.status(200).json({ error: false, message: "File is safe" });
    }

    if (result.status === 400) {
      fs.unlinkSync(req.file.path); //delete files
      res
        .status(400)
        .json({ error: true, message: "Someting went wrong files deleted!" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: true, message: error.message });
  }
};

export default { uplodFile, upload };

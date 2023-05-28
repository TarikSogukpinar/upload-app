import multer from "multer";
import path from "path";
import fs from "fs";
import axios from "axios";
import FormData from "form-data";
import slugify from "slugify";
import { v4 as uuidv4 } from "uuid";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./files/");
  },
  filename: (req, file, cb) => {
    const randomUniqueName = uuidv4();

    const fileName = path.basename(
      file.originalname,
      path.extname(file.originalname)
    );

    const fileExt = path.extname(file.originalname);

    const cleanedFileName = slugify(fileName, {
      replacement: "-",
      remove: /[*+~.()'"!:@]/g,
      lower: true,
      strict: true,
    });

    const limitedFileName = cleanedFileName.substring(0, 50); // Limit the filename length to 100 characters

    cb(null, randomUniqueName + "-" + limitedFileName + fileExt);
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
      `${process.env.VIRUS_TOTAL_API_URL}`,
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

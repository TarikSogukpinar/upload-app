import multer from "multer";
import path from "path";
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

const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(500)
        .json({ error: true, message: "Please upload a file" });
    }

    res.status(200).json({ error: false, message: "File is uploaded!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: true, message: error.message });
  }
};

export default { uploadFile, upload };

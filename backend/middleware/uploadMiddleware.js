import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../utils/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,

  params: async (req, file) => ({
    folder: "lavish-living",

    allowed_formats: ["jpg", "jpeg", "png", "webp"],

    public_id: `${Date.now()}-${file.originalname
      .split(".")[0]
      .replace(/\s+/g, "-")}`,
  }),
});

const upload = multer({
  storage,
});

export default upload;
import multer from "multer";
import uploadConfig from "../core/config/multer";

export const upload = multer(uploadConfig.upload("../tmp"));
import multer from "multer";
import uploadConfig from "../common/config/multer";

export const upload = multer(uploadConfig.upload("../tmp"));
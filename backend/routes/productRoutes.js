import express from "express";
import multer from "multer";
import { getProducts, matchProducts } from "../controllers/productController.js";

const router = express.Router();

// Multer setup (memory storage)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Routes
router.get("/", getProducts);

// Important: field name must match frontend "file"
router.post("/match", upload.single("file"), matchProducts);

export default router;


// import Product from "../models/productModel.js";
// import { getImageEmbedding } from "../utils/embed.js";
// import { cosineSimilarity } from "../utils/similarity.js";

// export const getProducts = async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.json(products);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// export const matchProducts = async (req, res) => {
//   try {
//     let queryEmbedding;

//     if (req.file) {
//       const base64 = req.file.buffer.toString("base64");
//       queryEmbedding = await getImageEmbedding(base64);
//     } else if (req.body.imageUrl) {
//       queryEmbedding = await getImageEmbedding(req.body.imageUrl);
//     } else {
//       return res.status(400).json({ message: "Please upload an image or provide a URL" });
//     }

//     const products = await Product.find({});
//     const results = products.map((p) => ({
//       ...p._doc,
//       similarity: cosineSimilarity(queryEmbedding, p.embedding),
//     }));

//     results.sort((a, b) => b.similarity - a.similarity);

//     res.json(results);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
import Product from "../models/productModel.js";
import { getImageEmbedding } from "../utils/embed.js";
import { cosineSimilarity } from "../utils/similarity.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    console.error("Error in getProducts:", err);
    res.status(500).json({ message: err.message });
  }
};

export const matchProducts = async (req, res) => {
  try {
    let queryEmbedding;

    if (req.file) {
      const base64 = req.file.buffer.toString("base64");
      queryEmbedding = await getImageEmbedding(base64);
    } else if (req.body.imageUrl) {
      queryEmbedding = await getImageEmbedding(req.body.imageUrl);
    } else {
      return res.status(400).json({ message: "Please upload an image or provide a URL" });
    }

    const products = await Product.find({});
    const results = products.map((p) => ({
      ...p._doc,
      similarity: cosineSimilarity(queryEmbedding, p.embedding),
    }));

    results.sort((a, b) => b.similarity - a.similarity);

    res.json(results);
  } catch (err) {
    console.error("Error in matchProducts:", err);
    res.status(500).json({ message: err.message });
  }
};

export const getImageEmbedding = async (imageData) => {
  // In real-world: process imageData with ML model
  return Array.from({ length: 10 }, () => Math.random().toFixed(2) * 1);
};

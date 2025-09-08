import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-4 transition hover:scale-105">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="rounded mb-2 object-cover w-full h-48"
      />
      <h3 className="font-bold text-gray-800 dark:text-gray-200">{product.name}</h3>
      <p className="text-gray-600 dark:text-gray-300">
        Similarity: {product.similarity.toFixed(2)}
      </p>
    </div>
  );
}

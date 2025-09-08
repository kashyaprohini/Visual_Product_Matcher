import React, { useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    setPreview(selected ? URL.createObjectURL(selected) : null);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select an image");

    const formData = new FormData();
    formData.append("file", file); // must match backend field name

    try {
      setLoading(true);
      const res = await axios.post(
     `${import.meta.env.VITE_API_URL}/api/products/match`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setProducts(res.data);
    } catch (err) {
      console.error(err);
      alert("Error uploading image");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
        Upload Image
      </h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="block w-full text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded p-2 mb-4"
      />

      {preview && (
        <div className="mb-4">
          <p className="text-gray-700 dark:text-gray-300 mb-2">Preview:</p>
          <img
            src={preview}
            alt="Preview"
            className="w-64 h-64 object-cover rounded border border-gray-300 dark:border-gray-600"
          />
        </div>
      )}

      <button
        onClick={handleUpload}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Matching..." : "Upload & Match"}
      </button>

      {products.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Matched Products:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((p) => (
              <ProductCard key={p._id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  return (
    <div className="w-full px-6 py-12">
      <h1 className="text-3xl font-extrabold text-center mb-12 text-gray-800">
        {products.length < 1
          ? "No Hotels Found"
          : `Search Results Found: ${products.length}`}
      </h1>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3">
        {products.map((post, index) => (
          <Link key={post._id} to={`/product/${post.slug}`}>
            <motion.article
              className="relative flex flex-col justify-end overflow-hidden rounded-2xl shadow-xl group h-[370px] border border-gray-200 bg-white cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={post.images?.[0] || "https://via.placeholder.com/300"}
                alt={post.title || "Post Thumbnail"}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent group-hover:backdrop-blur-sm group-hover:bg-black/40 transition duration-300" />
              <div className="relative z-10 p-6">
                <h3 className="text-xl font-bold text-white mb-1 drop-shadow">
                  {post.hotelLocation || "Location not available"}
                </h3>
                <p className="text-sm text-gray-200">{post.title || "Title not available"}</p>
              </div>
            </motion.article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

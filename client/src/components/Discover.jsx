import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// ✅ Import images correctly from `src/assets/related/`
import discoverBanner from "../assets/related/discover-banner.jpg";
import destination1 from "../assets/related/destination1.jpg";
import destination2 from "../assets/related/destination2.png"; // Ensure correct extension
import destination3 from "../assets/related/destination3.jpg";

const Discover = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Background Image Section */}
      <div 
        className="w-full h-[50vh] bg-cover bg-center relative rounded-xl shadow-lg" 
        style={{ backgroundImage: `url(${discoverBanner})` }} 
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="text-4xl font-bold mb-4"
          >
            Discover Your Next Adventure
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }} 
            className="text-lg max-w-xl"
          >
            Explore breathtaking destinations, plan your perfect getaway, and make unforgettable memories with our expert travel guides.
          </motion.p>
        </div>
      </div>

      {/* Destination Cards */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.7 }} 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
      >
        {[destination1, destination2, destination3].map((img, index) => (
          <div key={index} className="relative rounded-xl overflow-hidden shadow-lg">
            <motion.img 
              src={img} 
              alt={`Destination ${index + 1}`} 
              className="w-72 h-48 object-cover transition-transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.1 }}
            />
            <div className="absolute bottom-0 bg-black bg-opacity-50 text-white text-center w-full p-2">
              Destination {index + 1}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Explore Button */}
      <motion.button 
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.9 }} 
        onClick={() => navigate("/search")}
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all"
      >
        Explore Now
      </motion.button>
    </div>
  );
};

export default Discover;

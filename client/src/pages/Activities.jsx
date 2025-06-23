import React from "react";
import { motion } from "framer-motion";

// ✅ Image imports
import snorkeling from "../assets/activities/snorkeling.jpg";
import walking from "../assets/activities/walking tour.jpg";
import hiking from "../assets/activities/hiking.jpg";
import balloon from "../assets/activities/balloon.jpg";

const activities = [
  {
    title: "Snorkeling Adventure",
    description: "Explore the colorful underwater world with guided snorkeling tours.",
    image: snorkeling,
  },
  {
    title: "City Walking Tour",
    description: "Discover historical landmarks and hidden gems on a local walking tour.",
    image: walking,
  },
  {
    title: "Mountain Hiking",
    description: "Hike through scenic trails and experience nature up close.",
    image: hiking,
  },
  {
    title: "Hot Air Balloon",
    description: "Enjoy a breathtaking aerial view of the countryside.",
    image: balloon,
  },
];

const Activities = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-20 px-4 max-w-7xl mx-auto"
    >
      {/* Title animation */}
      <motion.h1
        className="text-4xl font-bold text-center mb-10 text-blue-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Activities to Explore
      </motion.h1>

      {/* Card Grid */}
      <motion.div
        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <motion.img
              src={activity.image}
              alt={activity.title}
              className="w-full h-48 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {activity.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {activity.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Book Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Activities;

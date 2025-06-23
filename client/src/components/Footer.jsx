// main/client/src/components/Footer.jsx

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-white to-blue-50 py-12 relative overflow-hidden z-10">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-2"
      >
        Explore the world with <span className="text-blue-600">Apna Hotel</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-gray-600 text-lg mb-10"
      >
        Your next go-to companion for travel
      </motion.p>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl font-extrabold text-blue-600 leading-tight">
              Apna <br /> Hotel
            </h1>
            <p className="mt-3 text-gray-500">
              Your next go-to companion for travel
            </p>
          </motion.div>

          {/* Links Grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {[
              {
                title: "Company",
                links: ["About", "Jobs", "Newsroom", "Advertising", "Contact us"],
              },
              {
                title: "Explore",
                links: [
                  "Australia",
                  "New Zealand",
                  "United States America (USA)",
                  "Greece",
                  "Maldives",
                  "Singapore",
                  "See more",
                ],
              },
              {
                title: "Terms and Policies",
                links: [
                  "Privacy Policy",
                  "Terms of use",
                  "Accessibility",
                  "Reward system policy",
                ],
              },
              {
                title: "Help",
                links: [
                  "Support",
                  "Cancel your bookings",
                  "Use Coupon",
                  "Refund Policies",
                  "International Travel Documents",
                ],
              },
            ].map((section, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 hover:text-blue-600 transition duration-300">
                  {section.title}
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className={`hover:text-blue-500 transition duration-300 ${
                          link === "See more" ? "text-blue-600 underline" : ""
                        }`}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-12 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} <span className="font-semibold">Apna Hotel</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

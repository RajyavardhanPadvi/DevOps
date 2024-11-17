import { useState } from "react";
import { motion } from "framer-motion";
import image1 from "/public/s3.jpg";
import image2 from '/public/screen_2x.jpg';
import image3 from '/public/assets/s1.jpg';
import image4 from '/public/assets/s4.jpg';
import image5 from '/public/assets/s3.jpg';
import image6 from '/public/screen_2.jpg';
import Hero from "../hero/Hero";
import { ArrowRight } from "lucide-react";

const Card = ({ itinerary }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = itinerary.details ? itinerary.details.length + 1 : 1;
  const images = [image2, image3, image4, image5, image6];
  const currentImage = images[currentPage - 1] || images[0];

  const nextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6 mx-auto relative max-w-screen-lg">

      {currentPage === 0 ? (
        // Descriptive page
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-3/5 w-full">
            <Hero
              image={image1}
              className="h-screen w-full object-cover"
              mainHeader={<h2 className="capitalize">{itinerary.city}</h2>}
              secondaryHeader={<p>{itinerary.desc}</p>}
            />
          </div>
        </motion.div>
      ) : (
        // Daily details page
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-3/5 w-full">
            <Hero
              image={currentImage}
              className="h-screen w-full object-cover"
              mainHeader={
                <h3 className="flex gap-2 items-center">
                  Day {itinerary.details[currentPage - 1].dayNumber}
                  <ArrowRight size={40} />
                  {itinerary.details[currentPage - 1].time.charAt(0).toUpperCase() + itinerary.details[currentPage - 1].time.slice(1)}
                </h3>
              }
              secondaryHeader={
                <p className="w-[500px] text-justify">
                  {itinerary.details[currentPage - 1].desc}
                </p>
              }
            />
          </div>
        </motion.div>
      )}

      {/* Pagination Controls */}
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className="px-4 py-2 text-sm text-gray-600 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className="px-4 py-2 text-sm text-gray-600 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

    </div>
  );
};

export default Card;

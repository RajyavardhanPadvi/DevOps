import Button from "@/ui/Button";
import Link from "next/link";

const Card = ({
  flight
}) => {
    return (
      <Link className="w-full p-4 rounded-lg shadow-md mb-5 bg-white" href={`/flights/details/${flight.id}`}>
        {/* Airline Info */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 bg-cover bg-center rounded-full"
              style={{
                backgroundImage: `url(${flight?.imageUrls[0]})`,
              }}
            ></div>
            <div>
              <p className="font-bold text-black text-lg">{flight?.airline}</p>
              <p className="text-sm text-gray-500">{flight?.flightNumber}</p>
            </div>
          </div>
          <div className="text-lg capitalize text-gray-600">{flight?.type}</div>
        </div>
  
        {/* Flight Description */}
        <div className="mt-2">
          <p className="text-gray-700">{flight?.desc}</p>
        </div>
  
        {/* Timing and Flight Details */}
        <div className="mt-4 flex justify-between items-center">
          <div className="flex-1 text-center">
            <p className="text-2xl font-semibold">{flight?.departureAt}</p>
            <p className="text-xl text-slate-800">{flight?.departure}</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="border-l-2 border-gray-300 h-12"></div>
            <p className="text-xl text-gray-800">{Math.floor(flight?.duration / 60)}hr {flight?.duration % 60}m</p>
          </div>
          <div className="flex-1 text-center">
            <p className="text-2xl font-semibold">{flight?.arrivalAt}</p>
            <p className="text-xl text-slate-800">{flight?.arrival}</p>
          </div>
        </div>
  
        {/* Price and Booking Action */}
        <div className="mt-4 mr-0 flex justify-between items-center">
          <div className="text-center">
            <p className="text-2xl font-bold text-black">₹{flight?.price}</p>
            <p className="text-sm text-gray-500">per adult</p>
          </div>
        </div>
  
        {/* Footer: Add to compare and View Flight Details */}
        <div className="mt-4 flex justify-between items-center text-sm text-blue-600">
          <button className="flex items-center gap-2">
            <span>Available Seats</span>
            <span className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center">
              <span className="p-3">80</span>
            </span>
          </button>
          
            
        </div>
  
        {/* Lock Price Option */}
        <div className="mt-4 flex justify-end items-center text-sm text-blue-600">
          <Button label={'Book'} />
        </div>
      </Link>
    );
  };
  
  export default Card;
  
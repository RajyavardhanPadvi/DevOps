import { X } from "lucide-react";
import React from "react";

const FlightPrices = ({flight,
  handleHidePrices}) => {
  return (
    <div className="fixed z-30 backdrop-blur top-0 left-0 min-h-full w-full shadow-lg">
            <div
                className="bg-slate-100 w-fit h-fit rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pb-8"
            >
                <div className="p-4 flex items-center justify-between">
                    <h3 className="font-semibold text-2xl">
                        <span className="text-green-800">3 Fare Options</span>  for you
                    </h3>
                    <X
                        size={20}
                        className="cursor-pointer"
                        onClick={handleHidePrices}
                    />
                </div>
                <div className="p-4 flex items-center justify-between">
                <div className="border rounded-lg p-4 w-full  h-[600px] max-w-xs shadow-md">
        <div className="text-xl font-bold text-gray-800">₹{flight.price} per adult</div>
        <div className="text-sm text-gray-500 mt-2 uppercase">{flight.airline.slice(0,4)}SAVER</div>
        <div className="border-t mt-4 pt-4">
          <h3 className="text-gray-700 font-semibold">Baggage</h3>
          <ul className="mt-2 space-y-1 text-gray-600">
            <li>✔ 7 Kgs Cabin Baggage</li>
            <li>✔ 15 Kgs Check-in Baggage</li>
          </ul>
        </div>
        <div className="border-t mt-4 pt-4">
          <h3 className="text-gray-700 font-semibold">Flexibility</h3>
          <ul className="mt-2 space-y-1 text-gray-600">
            <li>🟡 Cancellation fee starts at ₹ 3,950 (up to 2 hours before departure)</li>
            <li>🟡 Date Change fee starts at ₹ 2,950 up to 2 hrs before departure</li>
          </ul>
        </div>
        <div className="border-t mt-4 pt-4">
          <h3 className="text-gray-700 font-semibold">Seats, Meals & More</h3>
          <ul className="mt-2 space-y-1 text-gray-600">
            <li>⚪ Chargeable Seats</li>
            <li>⚪ Meals information not available</li>
          </ul>
        </div>
        <button className="mt-16 w-full bg-blue-600 text-white py-2 rounded-md font-semibold">
          BOOK NOW
        </button>
      </div>

      {/* Card 2 */}
      <div className="border rounded-lg p-4 w-full h-[600px] max-w-xs shadow-md">
        <div className="text-xl font-bold text-gray-800">₹{flight.price + 1000} per adult</div>
        <div className="text-sm text-gray-500 mt-2">FARE BY TRAVELX</div>
        <div className="border-t mt-4 pt-4">
          <h3 className="text-gray-700 font-semibold">Baggage</h3>
          <ul className="mt-2 space-y-1 text-gray-600">
            <li>✔ 7 Kgs Cabin Baggage</li>
            <li>✔ 15 Kgs Check-in Baggage</li>
          </ul>
        </div>
        <div className="border-t mt-4 pt-4">
          <h3 className="text-gray-700 font-semibold">Flexibility</h3>
          <ul className="mt-2 space-y-1 text-gray-600">
            <li>🟡 Cancellation fee starts at ₹ 3,950 (up to 2 hours before departure)</li>
            <li>🟡 Date Change fee starts at ₹ 2,950 up to 2 hrs before departure</li>
          </ul>
        </div>
        <div className="border-t mt-4 pt-4">
          <h3 className="text-gray-700 font-semibold">Seats, Meals & More</h3>
          <ul className="mt-2 space-y-1 text-gray-600">
            <li>⚪ Chargeable Seats</li>
            <li>⚪ Meals information not available</li>
            <li>🔶 Benefits worth ₹1,500 included</li>
          </ul>
        </div>
        <button className="mt-9 w-full bg-blue-600 text-white py-2 rounded-md font-semibold">
          BOOK NOW
        </button>
      </div>

      {/* Card 3 */}
      <div className="border rounded-lg p-4 w-full h-[600px] max-w-xs shadow-md">
        <div className="text-xl font-bold text-gray-800">₹{flight.price + 3000} per adult</div>
        <div className="text-sm text-gray-500 mt-2 uppercase">{flight.airline.slice(0,4)}FLEX</div>
        <div className="border-t mt-4 pt-4">
          <h3 className="text-gray-700 font-semibold">Baggage</h3>
          <ul className="mt-2 space-y-1 text-gray-600">
            <li>✔ 7 Kgs Cabin Baggage</li>
            <li>✔ 15 Kgs Check-in Baggage</li>
          </ul>
        </div>
        <div className="border-t mt-4 pt-4">
          <h3 className="text-gray-700 font-semibold">Flexibility</h3>
          <ul className="mt-2 space-y-1 text-gray-600">
            <li>🟡 Cancellation fee starts at ₹ 3,950 (up to 2 hours before departure)</li>
            <li>🟡 Date Change fee starts at ₹ 2,950 up to 2 hrs before departure</li>
          </ul>
        </div>
        <div className="border-t mt-4 pt-4">
          <h3 className="text-gray-700 font-semibold">Seats, Meals & More</h3>
          <ul className="mt-2 space-y-1 text-gray-600">
            <li>✔ Free Seats</li>
            <li>✔ Complimentary Meals</li>
          </ul>
        </div>
        <button className="mt-16 w-full bg-blue-600 text-white py-2 rounded-md font-semibold">
          BOOK NOW
        </button>
      </div>
                </div>
                
                
            </div>
        </div>
  );
};

export default FlightPrices;

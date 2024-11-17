import { Plane } from "lucide-react";
import { useState } from "react";

const FlightDetail = ({flight}) => {
  const [activeTab, setActiveTab] = useState("flightDetails");

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Tabs */}
      <div className="flex border-b border-gray-300 mb-4">
        <button
          onClick={() => setActiveTab("flightDetails")}
          className={`px-4 py-2 ${activeTab === "flightDetails" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}
        >
          FLIGHT DETAILS
        </button>
        <button
          onClick={() => setActiveTab("fareSummary")}
          className={`px-4 py-2 ${activeTab === "fareSummary" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}
        >
          FARE SUMMARY
        </button>
        <button
          onClick={() => setActiveTab("cancellation")}
          className={`px-4 py-2 ${activeTab === "cancellation" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}
        >
          CANCELLATION
        </button>
        <button
          onClick={() => setActiveTab("dateChange")}
          className={`px-4 py-2 ${activeTab === "dateChange" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}
        >
          DATE CHANGE
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "flightDetails" && (
        <div className="border p-4 rounded-lg">
          <h2 className="font-semibold flex items-center gap-2 text-lg capitalize">{flight.departure} <Plane/> {flight.arrival} </h2>
          <div className="flex justify-between items-center mt-4">
            <div>
              <p className="font-semibold">{flight.airline} {flight.flightNumber.slice(0,2)} | {flight.flightNumber.slice(2)} </p>
              <p className="text-sm text-gray-500">{flight.planetype}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-600">{flight.departureAt} - {flight.arrivalAt}</p>
              <p className="text-sm text-gray-500">Duration: {Math.floor(flight?.duration / 60)}hr {flight?.duration % 60}m</p>
            </div>
          </div>
          <div className="mt-4 flex justify-between text-sm text-gray-600">
            <p>Terminal T2, {flight.departure}, India</p>
            <p> {flight.arrival} Airport, India</p>
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <p className="font-semibold">BAGGAGE:</p>
              <p>Adult: 15 Kgs Check-In, 7 Kgs Cabin</p>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <p>3-3 Layout</p>
              <p>Beverage Available</p>
              <p>Standard Recliner (29" Legroom)</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === "fareSummary" && (
        <div className="border p-4 rounded-lg">
          <h2 className="font-semibold text-lg">Fare Breakup</h2>
          <div className="mt-4">
            <p className="flex justify-between">
              <span>Total:</span> <span>₹{flight.price + 1000}</span>
            </p>
            <p className="flex justify-between">
              <span>Base Fare:</span> <span>₹{flight.price}</span>
            </p>
            <p className="flex justify-between">
              <span>Surcharges:</span> <span>₹1000</span>
            </p>
          </div>
        </div>
      )}

      {activeTab === "cancellation" && (
        <div className="border p-4 rounded-lg">
          <h2 className="font-semibold text-lg">Cancellation Policy</h2>
          <table className="w-full mt-4 border-collapse border">
            <thead>
              <tr className="border-b">
                <th className="p-2 text-left">Time Frame</th>
                <th className="p-2 text-left">Airline Fee + MMT Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">0 hours to 4 hours</td>
                <td className="p-2">Non-Refundable</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">4 hours to 4 days</td>
                <td className="p-2">₹{flight.price - 1000} - ₹300</td>
              </tr>
              <tr>
                <td className="p-2">4 days to 365 days</td>
                <td className="p-2">₹{flight.price} - ₹300</td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm text-red-500 mt-4">
            * The airline fee is indicative. MakeMyTrip does not guarantee the accuracy of this information. All fees are per passenger. Refunds are subject to airline approval.
          </p>
        </div>
      )}

      {activeTab === "dateChange" && (
        <div className="border p-4 rounded-lg">
        <h2 className="font-semibold text-lg mb-4"><span className="uppercase">{flight.departure.slice(0,3)} - {flight.arrival.slice(0,3)}</span> Date Change Policy</h2>
        <table className="w-full border-collapse mb-4">
          <thead>
            <tr>
              <th className="border-b p-2 text-left text-gray-600 font-medium">Time Frame</th>
              <th className="border-b p-2 text-left text-gray-600 font-medium">Airline Fee + MMT Fee + Fare Difference</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border-b">0 hours to 4 hours*</td>
              <td className="p-2 border-b">ADULT : Non Changeable</td>
            </tr>
            <tr>
              <td className="p-2 border-b">4 hours to 4 days*</td>
              <td className="p-2 border-b">ADULT : ₹ 2,999 + ₹ 300 + Fare difference</td>
            </tr>
            <tr>
              <td className="p-2 border-b">4 days to 365 days*</td>
              <td className="p-2 border-b">ADULT : ₹ 2,250 + ₹ 300 + Fare difference</td>
            </tr>
          </tbody>
        </table>
        <div className="bg-orange-300 text-orange-800 p-3 rounded-lg">
        <p className="text-sm ">
          *From the Time of Departure
        </p>
        <p className="mt-4 text-xs ">
          <span className="font-semibold">Important:</span> The airline fee is indicative. MakeMyTrip does not guarantee the accuracy of this information. All fees mentioned are per passenger. Date change charges are applicable only on selecting the same airline on a new date. The difference in fares between the old and the new booking will also be payable by the user.
        </p>
        </div>
      </div>
      )}
    </div>
  );
};

export default FlightDetail;

"use client"
import Image from 'next/image';
import { register } from "swiper/element/bundle";
import React, { useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ClipLoader } from 'react-spinners';
import { getFlightById } from './service';
import Button from '@/ui/Button';
import FlightPrices from '@/components/flight-details/FlightPrices';
import FlightDetail from '@/components/flight-details/FlightDetail';

register();

const FlightDetails = ({ params }) => {
  const { id } = params;
  const [showModal, setShowModal] = useState(false);
  const [showPrices, setShowPrices] = useState(false);
  const swiperElRef = useRef(null);

  const { 
    data: flight, 
    isPending, 
    isError,
    error 
  } = useQuery({
    queryKey: ["flights", id],
    queryFn: () => getFlightById(id),
    retry: 1
  });

  const handleShowModal = () => setShowModal(true);
  const handleHideModal = () => setShowModal(false);

  const handleShowPrices = () => setShowPrices(true);
  const handleHidePrices = () => setShowPrices(false);

  if (isPending) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
        <ClipLoader color={"#008cff"} size={40} />
      </div>
    );
  }
  if (isError) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md mx-4">
          <h2 className="text-2xl font-bold text-red-600">Error Loading Flight</h2>
          <p className="mt-4 text-gray-600">{error?.message || 'Failed to load flight details'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {showPrices && (
              <FlightPrices
                flight={flight}
                handleHidePrices={handleHidePrices}
              />
            )}
      <div className="mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm p-6">
          {/* Header with special features */}
          <div className="flex justify-between items-center mb-4">
          </div>

          {/* Flight Info */}
          <div className="flex justify-between items-start mt-6">
            <div className="flex items-center justify-center gap-4">
              {/* Airline Logo & Info */}
              <div className="flex items-center gap-4">
              <div className="w-fit h-fit">
              <swiper-container
                ref={swiperElRef}
                slides-per-view="1"
                navigation="true"
              >
                {flight?.imageUrls?.map((imageUrl) => (
                  <swiper-slide key={imageUrl}>
                    <Image
                      className="w-full object-cover rounded-lg"
                      height="250"
                      width="250"
                      src={imageUrl}
                      blurDataURL={flight.blurredImage}
                      placeholder="blur"
                      alt='flight-image'
                    />
                  </swiper-slide>
                ))}
              </swiper-container>
            </div>
                <div>
                  <p className="font-bold text-black">{flight.airline}</p>
                  <p className="text-gray-600 text-md">{flight.flightNumber}</p>
                </div>
              </div>

              {/* Flight Timeline */}
              <div className="flex items-center gap-8 ml-64">
                <div className="text-center">
                  <p className="text-2xl font-semibold mb-1">{flight.departureAt}</p>
                  <p className="text-xl text-black">{flight.departure}</p>
                </div>
                
                <div className="flex flex-col items-center mx-4">
                <p className="text-xl text-gray-800">{Math.floor(flight?.duration / 60)}h {flight?.duration % 60}m</p>
                  <div className="relative w-32">
                    <div className="h-[3px] w-full bg-[#51E2C2]"></div>
                  </div>
                  <p className="text-sm text-gray-500">Non stop</p>
                </div>

                <div className="text-center">
                  <p className="text-2xl font-semibold mb-1">
                    {flight.arrivalAt}
                    {flight.nextDay && (
                      <span className="text-xs font-bold text-red-500 ml-1">+ 1 DAY</span>
                    )}
                  </p>
                  <p className="text-xl text-black">{flight.arrival}</p>
                </div>
              </div>
            </div>

            {/* Price & Book Section */}
            <div className="text-right">
              <div className="mb-4">
                <p className="text-xl font-bold">₹ {flight.price?.toLocaleString()}</p>
                <p className="text-xs text-gray-600">per adult</p>
              </div>
              <button
                onClick={handleShowPrices}
                className="bg-white text-[#008cff] border border-[#008cff] px-6 py-2 rounded font-semibold hover:bg-[#008cff] hover:text-white transition-colors"
              >
                VIEW PRICES
              </button>
            </div>
          </div>
          {/* Footer */}
          <div className="flex justify-between items-center mt-4 pt-4 border-t">
            <div></div>
            <Button className="text-[#008cff] text-sm font-semibold" label={showModal? 'Hide Flight Details':'View Flight Details'} onClick={showModal? handleHideModal:handleShowModal} />
              </div>
        </div>
            {showModal && (
              <FlightDetail
                flight={flight}
              />
            )}

        {/* Reviews Section can be added here if needed */}
      </div>
    </div>
  );
};

export default FlightDetails;
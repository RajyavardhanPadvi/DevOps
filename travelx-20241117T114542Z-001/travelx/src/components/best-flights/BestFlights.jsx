"use client"
import React, { useState } from 'react'
import Card from './Card'
import { useQuery } from '@tanstack/react-query'
import { ClipLoader } from 'react-spinners'
import { getBestFlights } from './service'

const BestFlights = () => {
  
  const { data, isLoading } = useQuery({
    queryKey: ["flights"],
    queryFn: getBestFlights
  })

  if (isLoading) {
    const style = {
      marginTop: "5rem",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      height: "100vh"
    }

    return (
      <div style={style}>
        <ClipLoader
          color={"#123abc"}
        />
      </div>
    )
  }

  return (
    <div className="h-full w-full my-36">
      <div className="h-full w-11/12 mx-auto flex flex-col justify-start">
        <h5 className="text-[20px] bg-blue-500 text-white rounded-full p-4 w-max">
          Explore Top
        </h5>
        <h2 className="text-4xl text-slate-800 font-bold mt-6 mb-12">
          Best Flights
        </h2>
        <div className="grid grid-cols-3 gap-6 bg-white/80">
          {data?.map((flight) => (
            <Card
              key={flight.id}
              flight={flight}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BestFlights
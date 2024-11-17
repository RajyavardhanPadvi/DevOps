"use client"
import React, { useEffect } from 'react'
import Select from '@/ui/Select'
import { itineraryDaysOptions, itineraryOptions, optionLocations } from '@/data/data'
import Button from '@/ui/Button'
import { useRouter, useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import Image from "next/image"
import { toast } from 'react-hot-toast'
import { schema } from './schema'
import { getItinerary } from './service'
import Card from '@/components/itinerary/Card'
import iti from '/public/s3.jpg'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const ItineraryBuilder = () => {
  const searchParams = useSearchParams()
  const city = searchParams.get("city")
  const budgetType = searchParams.get("budgetType")
  const daysType = searchParams.get("daysType")
  const router = useRouter()

  const { city: city_name, value, image } = optionLocations.find(location => location.value === city) ?? {}
  const defaultValues = {
    city: value,
    budgetType,
    daysType
  }

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm({
    defaultValues,
    resolver: zodResolver(schema)
  })

  const queryClient = useQueryClient()
  const { data: itinerary, isLoading, isError } = useQuery({
    queryFn: () => getItinerary(getValues()),
    queryKey: ["itinerary"]
  })
  useEffect(() => {
    if (errors) {
      Object.keys(errors).map((key) => {
        toast.error(errors[key]?.message)
      })
    }
  }, [errors])

  const onSubmit = async (data) => {
    await getItinerary(data)
    queryClient.invalidateQueries(["itinerary"])
    const newUrl = `/itinerary?city=${data.city}&budgetType=${data.budgetType}&daysType=${data.daysType}`
    router.push(newUrl, { scroll: false })
  }

  return (
    <div className="min-h-screen w-full">
      <div className="relative h-3/5 w-full">
        <Image
          src={image}
          className="brightness-50 h-screen w-full object-cover"
          alt='bg-image'
        />
        <h3
          className="absolute text-6xl capitalize font-semibold flex items-center justify-center bottom-0 left-0 right-0 top-0 text-white"
        >
          {city_name}
        </h3>
      </div>
      <div className="relative z-20 -mt-12 h-full w-full flex flex-col items-center">
        <form 
          onSubmit={handleSubmit(onSubmit)} 
          className="border w-2/3 h-28 border-slate-500 px-4 py-12 rounded-xl bg-blue-600 text-white flex justify-between items-center"
        >
          <div className="flex flex-col items-center gap-1">
            <h3 className="ml-1 text-[#efefef] font-semibold">City</h3>
            <Select
              register={register("city")}
              data={optionLocations}
              className="text-blue-800 p-2 rounded-xl outline-none captalize"
            />
          </div>
          <div className="flex flex-col items-center gap-1 w-1/3">
            <h3 className="ml-1 text-[#efefef] font-semibold">Price</h3>
            <div className="flex items-center gap-2 w-full">
              <Select
                register={register("daysType")}
                data={itineraryDaysOptions}
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-1">
            <h3 className="ml-1 text-[#efefef] font-semibold">Type of Itinerary</h3>
            <Select
               register={register("budgetType")}
               data={itineraryOptions}
               className="text-blue-800 p-2 rounded-xl outline-none"
            />
          </div>
          <Button
            disabled={isLoading}
            label="Search"
            className="mt-6 px-6 py-2 text-[20px] bg-white text-blue-600 rounded-xl transition-all hover:bg-[#efefef]"
          />
        </form>
        <div className="w-full mt-36 flex flex-wrap justify-center items-center gap-14">
          {Array.isArray(itinerary?.data) && itinerary?.data.length > 0 ? (
          itinerary.data.map((itinerary, idx) => (
            <Card
              key={idx}
              itinerary={itinerary}
            />
            ))
              ) : (
            <p className="text-gray-500">No itineraries available.</p>
          )}
       </div>
      </div>
    </div>
  )
}

export default ItineraryBuilder;

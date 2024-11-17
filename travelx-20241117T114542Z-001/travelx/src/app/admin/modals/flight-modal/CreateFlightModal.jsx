"use client"
import { useForm } from "react-hook-form"
import Input from '@/ui/Input'
import React, { useEffect, useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { schema } from "./schema"
import Select from "@/ui/Select"
import { optionLocations, optionTypes } from "@/data/data"
import Button from "@/ui/Button"
import { toast } from "react-hot-toast"
import { createNewFlight, postImages } from "./service"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

const CreateFlightModal = () => {
  const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUD_NAME
  const UPLOAD_PRESET = process.env.NEXT_PUBLIC_UPLOAD_PRESET
  const router = useRouter()
  const [images, setImages] = useState([])

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: ({ data, imageUrls }) => createNewFlight(data, imageUrls),
    mutationKey: ["flights"]
  })

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      flightNumber: "SG 8169",
      airline: "SpiceJet",
      duration: 130,
      price: 7829,
      type: "economy",
      departure: "New Delhi",
      arrival: "Mumbai",
      departureAt: "22:00",
      arrivalAt: "00:10",
      seats: 150 
  }
  })

  useEffect(() => {
    if (Object.keys((errors)).length > 0) {
      Object.keys((errors)).map((key) => {
        toast.error(errors[key].message)
      })
    }
  }, [errors])

  const handleImage = (e) => {
    setImages((prev) => {
      return [...prev, e.target.files[0]]
    })
  }

  const uploadImage = async (image, idx) => {
    if (!image) return

    const toastId = toast.loading(`Image ${idx + 1} is being uploaded`)

    const formData = new FormData()
    formData.append("file", image)
    formData.append("upload_preset", UPLOAD_PRESET)

    try {
      const imageUrl = await postImages(CLOUD_NAME, formData)
      toast.success(`Successfully uploaded image ${idx + 1}`)
      toast.dismiss(toastId)

      return imageUrl
    } catch (error) {
      console.error(error)
    }
  }

  const onSubmit = async (data) => {
    if (!images?.length) return toast.error("You must publish an image!")

    const imageUrls = await Promise.all(images.map((image, idx) => {
      const imageUrl = uploadImage(image, idx)
      return imageUrl
    }))

    const newFlight = await mutateAsync({ data, imageUrls })
    toast.success("Redirecting to flight...")
    router.push(`flights/details/${newFlight.id}`)
  }


  return (
      <form onSubmit={handleSubmit(onSubmit)} className="w-full px-4 py-6 flex flex-col items-center gap-8 bg-slate-800 rounded-lg">
        <div className="flex gap-2">
        <Input
          type="text"
          className="text-slate-400 w-[400px] outline-none p-2"
          register={register("flightNumber")}
          placeholder="AS 1023"
        />
        <Input
          type="text"
          className="text-slate-400 w-[400px] outline-none p-2"
          register={register("airline")}
          placeholder="SpiceJet"
        />
        </div>
        <textarea
          type="text"
          className="text-slate-400 w-full outline-none p-2"
          register={register("desc")}
          placeholder="This Flight is amazing. It has this view...."
        />
         <label htmlFor="departure" className="text-white font-bold" >Departure Details</label>
       <div className="flex gap-2" >
       <Select
          data={optionLocations}
          className="text-slate-400 w-[400px] outline-none p-2 ml-2"
          register={register("departure")}
        />
        <Input
          type="text"
          className="text-slate-400 w-[400px] outline-none p-2"
          register={register("departureAt")}
          placeholder="This hotel is amazing. It has this view...."
        />
       </div>
         <label htmlFor="arrival" className="text-white font-bold" >Arrival Details</label>
        <div className="flex gap-2">
        <Select
          data={optionLocations}
          className="text-slate-400 w-[400px] outline-none p-2 ml-2"
          register={register("arrival")}
        />
        <Input
          type="text"
          className="text-slate-400 w-[400px] outline-none p-2"
          register={register("arrivalAt")}
          placeholder="This hotel is amazing. It has this view...."
        />
        </div>
        <label htmlFor="departure" className="text-white font-bold" >Type of Seats</label>
        <Select
          data={optionTypes}
          className="text-slate-400 w-full outline-none p-2 ml-2"
          register={register("type")}
        />
        <div className="flex gap-2">
        <Input
          type="number"
          className="text-slate-400 w-[400px] outline-none p-2"
          register={register("price", { valueAsNumber: true })}
          step={0.01}
          placeholder="5249.00"
        />
        <Input
          type="number"
          className="text-slate-400 w-[400px] outline-none p-2"
          register={register("seats", { valueAsNumber: true })}
          step={1}
        />
        </div>
        <label className="text-slate-400 w-[400px] ml-4" htmlFor="images">
          Upload images
        </label>
        <input
          onChange={handleImage}
          type="file"
          className="text-slate-400"
          style={{ display: "none" }}
          id="images"
        />
        <Button
          disabled={isLoading}
          className="w-[400px] bg-blue-500 text-white px-4 py-2 rounded-xl disabled:bg-blue-700"
          label="Submit"
        />
      </form>
  )
}

export default CreateFlightModal
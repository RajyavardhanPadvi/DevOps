"use client"
import React, { useEffect, useState } from 'react'
import Leh from "/public/leh.jpg"
import Input from '@/ui/Input'
import Button from '@/ui/Button'
import Image from 'next/image'
import { toast } from 'react-hot-toast'
import { schema } from './schema'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { zodResolver } from '@hookform/resolvers/zod'
import { createNewUser, postImages } from './service'

const SignUp = () => {

  const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUD_NAME
  const UPLOAD_PRESET = process.env.NEXT_PUBLIC_UPLOAD_PRESET
  const router = useRouter()
  const [images, setImages] = useState([])

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: ({ data, image }) => createNewUser(data, image),
    mutationKey: ["users"]
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema)
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

    const image = await Promise.all(images.map((image, idx) => {
      const imageUrl = uploadImage(image, idx)
      return imageUrl
    }))

    const newUser = await mutateAsync({ data, image })
    toast.success("Redirecting to Login...")
    router.push(`/login`,2500)
  }

  return (
    <div className="relative h-screen w-full">
      <div className="relative h-full w-full">
        <Image
          src={Leh}
          className="brightness-50 h-full w-full object-cover"
        />
        <div
          className="h-[450px] w-[400px] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg"
        >
          <h2 className="text-center p-4 font-semibold text-slate-800 text-2xl border-b border-slate-500">
            Create an account
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-12 flex flex-col items-center w-full gap-8">
            <Input
              className="w-full mx-auto outline-none border border-slate-400 py-1 px-3 rounded-md focus:border-slate-600"
              type="text"
              placeholder="John123"
              register={register("username")}
            />
            <Input
              className="w-full mx-auto outline-none border border-slate-400 py-1 px-3 rounded-md focus:border-slate-600"
              type="email"
              placeholder="johndoe@gmail.com"
              register={register("email")}
            />
            <Input
              className="w-full mx-auto outline-none border border-slate-400 py-1 px-3 rounded-md focus:border-slate-600"
              type="password"
              placeholder="********"
              register={register("password")}
            />
            <label htmlFor="images" className=" text-slate-400">
              <span className="block bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer transition-all hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
                Upload Profile Pic
              </span>
            </label>
            <input
              onChange={handleImage}
              type="file"
              id="images"
              className="hidden"
              />

            <Button
              disabled={isLoading}
              className="w-3/4 mt-1 mx-auto cursor-pointer rounded-lg py-2 px-6 text-xl text-white bg-blue-500 transition-all hover:bg-blue-600"
              label="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
import { features } from '@/data/data'
import { GithubIcon, Instagram, Mail } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='border h-[400px] w-full mt-32'>
            <div className='py-12 h-full w-5/6 mx-auto flex items-center justify-between'>
                <div className="flex-1 flex flex-col gap-4">
                    <h2>About the App</h2>
                    {features.map((item,idx)=> {
                        return <h3 key={idx}>{item.title}</h3>
                    })}
                </div>
                <div className="flex-1 flex flex-col items-start gap-4">
                    <h2>Contacts</h2>
                    <span className='flex gap-2 items-center'><Mail className="border border-black rounded-full p-2" size={50} /> 156rajw@gmail.com</span>
                    <span className='flex gap-2 items-center'><Instagram className="border border-black rounded-full p-2" size={50} /> urs_shrii</span>
                    <span className='flex gap-2 items-center'><GithubIcon className="border border-black rounded-full p-2" size={50} /> shrinivaswaney22</span>
                </div>
                <div className="flex-1 flex flex-col items-end gap-4">
                    <h2>Location</h2>
                    <span>Continent: Asia</span>
                    <span>Country: India</span>
                    <span>Current Location: Mumbai</span>
                </div>
            </div>
        </div>
  )
}

export default Footer
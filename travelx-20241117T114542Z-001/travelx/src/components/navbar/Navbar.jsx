"use client"
import Link from 'next/link'
import { AiOutlineUser } from "react-icons/ai"
import { signOut, useSession } from "next-auth/react"
import React, { useEffect, useState } from 'react'
import { Globe, Phone, Plane, Train } from 'lucide-react'
import { FaQuestion } from 'react-icons/fa'

const Navbar = () => {
    const [showModal, setShowModal] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const { data: session } = useSession()

    const toggleModal = () => setShowModal(prev => !prev)

    useEffect(() => {
        window.onscroll = () => {
            setIsScrolled(window.pageYOffset === 0 ? false : true)
            return () => (window.onscroll = null)
        }
    }, [])

    return (
        <div className={`fixed z-50 h-11 w-full top-0 left-0 ${isScrolled ? "shadow-md backdrop-blur" : ""} `}>
            <div className="h-full w-2/3 mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 transition-all">
                    <h1 className={`${isScrolled ? "text-blue-600" : "text-[#cec7c7]"} text-2xl font-bold`}>
                        TravelX
                    </h1>
                    <Plane
                        size={25}
                        color={`${isScrolled ? "rgb(37 99 235)" : "#cec7c7"}`}
                    />
                    <Globe
                        size={25}
                        color={`${isScrolled ? "rgb(37 99 235)" : "#cec7c7"}`}
                    />
                    <Train
                        size={25}
                        color={`${isScrolled ? "rgb(37 99 235)" : "#cec7c7"}`}
                    />
                </Link>
                <div className='flex gap-11 items-center'>
                    <Link className="cursor-pointer" href={'/about'}>
                        <FaQuestion
                            size={25}
                            color={`${isScrolled ? "rgb(37 99 235)" : "#cec7c7"}`}
                        />
                    </Link>
                    <Link className="cursor-pointer" href={'/contact'}>
                        <Phone
                            size={25}
                            color={`${isScrolled ? "rgb(37 99 235)" : "#cec7c7"}`}
                        />
                    </Link>
                    <div className="cursor-pointer" onClick={toggleModal}>
                        <AiOutlineUser
                            size={30}
                            color={`${isScrolled ? "rgb(37 99 235)" : "#cec7c7"}`}
                        />
                    </div>
                    {showModal && (
                        <>
                            <div
                                onClick={toggleModal}
                                className="absolute top-16 right-[270px] shadow-md flex flex-col items-center gap-4 p-4 bg-white rounded-xl"
                            >
                                {session?.user?.isAdmin &&
                                    <Link className="bg-red-500 text-white px-1 py-2 rounded-xl" href='/admin/dashboard'>
                                        Admin Dashboard
                                    </Link>
                                }
                                <Link href="/reservations">
                                    Reservations
                                </Link>
                                <button onClick={() => signOut()} className="text-slate-500 text-center">
                                    Logout
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar
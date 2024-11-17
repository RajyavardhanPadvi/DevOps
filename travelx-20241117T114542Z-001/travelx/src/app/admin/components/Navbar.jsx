"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import CreateModal from '../modals/create-modal/CreateModal'
import { Globe, LogOut, NotebookPen, Plane, Train } from 'lucide-react'

const Navbar = () => {
    const [showModal, setShowModal] = useState(false)

    const handleHideModal = () => setShowModal(false)
    const handleShowModal = () => setShowModal(true)

    return (
        <div className="sticky top-0 left-0 w-full flex justify-between items-center">
            <Link href="/admin/dashboard" className="flex items-center gap-2 transition-all">
            <h1 className={`${"text-blue-600"} text-2xl font-bold`}>
                        TravelX
                    </h1>
                    <Plane
                        size={25}
                        color={`${  "rgb(37 99 235)"}`}
                    />
                    <Globe
                        size={25}
                        color={`${"rgb(37 99 235)"}`}
                    />
                    <Train
                        size={25}
                        color={`${"rgb(37 99 235)"}`}
                    />
            </Link>
            <div className="flex items-center gap-6">
                <button onClick={handleShowModal} className="bg-[#4522f4] px-2 py-2 cursor-pointer rounded-xl transition hover:bg-[#5738f2]">
                    <NotebookPen
                        size={25}
                        color="#fff"
                    />
                </button>
                <Link className="cursor-pointer" href={'/'}>
                    <LogOut size={25} color="rgb(37 99 235)" />
                </Link>
                {showModal && (
                    <CreateModal
                        handleHideModal={handleHideModal}
                    />
                )}
            </div>
        </div>
    )
}

export default Navbar
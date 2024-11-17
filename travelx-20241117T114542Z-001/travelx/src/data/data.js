import Alibaug from '/public/alibaug.webp'
import Coorg from '/public/coorg.jpg'
import Daman from '/public/Daman.jpeg'
import Delhi from '/public/delhi.jpg'
import Goa from '/public/goa.jpg'
import Haridwar from '/public/haridwar.jpg'
import Leh from '/public/leh.jpg'
import Lonavala from '/public/lonavala.jpg'
import Manali from '/public/manali.jpg'
import Mumbai from '/public/mumbai.jpg'
import { Headset, NotepadText, Search, Star, User2Icon, WalletCards } from 'lucide-react'

export const optionTypes = [
    { text: "Luxury", value: "luxury" },
    { text: "5 Stars", value: "fiveStars" },
    { text: "4 Stars", value: "fourStars" },
    { text: "3 Stars", value: "threeStars" },
    { text: "Budget", value: "budget" },
]

export const optionLocations = [
    {
        city: "Alibaug",
        value: "alibaug",
        image: Alibaug
    },
    {
        city: "Coorg",
        value: "coorg",
        image: Coorg
    },
    {
        city: "Daman",
        value: "daman",
        image: Daman
    },
    {
        city: "New Delhi",
        value: "delhi",
        image: Delhi
    },
    {
        city: "Goa",
        value: "goa",
        image: Goa
    },
    {
        city: "Haridwar",
        value: "haridwar",
        image: Haridwar
    },
    {
        city: "Leh",
        value: "leh",
        image: Leh
    },
    {
        city: "Lonavala",
        value: "lonavala",
        image: Lonavala
    },
    {
        city: "Manali",
        value: "manali",
        image: Manali
    },
    {
        city: "Mumbai",
        value: "mumbai",
        image: Mumbai
    },
]

export const features = [
    {
        symb: Search,
        title:"Comprehensive Destination Search",
        desc:"Explore a wide range of destinations with user-friendly filters to find your perfect getaway."
    },
    {
        symb: NotepadText,
        title:"Custom Itinerary Planning",
        desc:"Easily create and personalize your travel itinerary with accommodations, activities, and transportation."
    },
    {
        symb: User2Icon,
        title:"User-Friendly Interface",
        desc:"Intuitive design for effortless navigation and quick booking."
    },
    {
        symb: Star,
        title:"Integrated Reviews & Ratings",
        desc:"Access genuine reviews from fellow travelers to make informed choices."
    },
    {
        symb: WalletCards,
        title:"Secure Payment Options:",
        desc:"Multiple payment methods with secure processing for peace of mind."
    },
    {
        symb: Headset,
        title:"24/7 Customer Support",
        desc:"Get assistance anytime with our dedicated support team ready to help with your travel needs."
    }
]

export const optionTypesFlight = [
    { text: "Luxury", value: "luxury" },
    { text: "Buisness Class", value: "business" },
    { text: "Premium Economy", value: "premiumE" },
    { text: "Economy", value: "economy" },
]

export const itineraryOptions = [
    { text: "Luxury", value: "luxury" },
    { text: "Basic", value: "basic" },
    { text: "Budget", value: "budget" },
]

export const itineraryDaysOptions = [
    { text: "5 Days", value: "fivedays" },
    { text: "3 Days", value: "threedays" },
    { text: "1 Day", value: "oneday" },
]

export const itineraryTime = [
    { text: "Morning", value: "morning" },
    { text: "Afternoon", value: "afternoon" },
    { text: "Evening", value: "evening" },
    { text: "Night", value: "night" },
]

import { Search, NotepadText, User2Icon, Star, WalletCards, Headset } from "lucide-react";
const FeatureCard = ({ symb: Icon, title, desc }) => (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-2 group">
        <div className="flex items-center justify-center bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 transition duration-300 group-hover:rotate-6 group-hover:scale-105">
            <Icon className="text-blue-600 w-8 h-8" />
        </div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">{title}</h3>
        <p className="text-gray-600">{desc}</p>
    </div>
);

export default FeatureCard
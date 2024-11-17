"use client";
import React from "react"; 
import { features } from "@/data/data";
import FeatureCard from "./FeatureCard";

const Features = () => {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Website Features</h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};



export default Features;

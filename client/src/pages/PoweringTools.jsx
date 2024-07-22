import React, { useEffect, useState } from "react";
import Tool1 from "../assets/tools/1.svg";
import Tool2 from "../assets/tools/2.svg";
import Tool3 from "../assets/tools/3.svg";
import Tool4 from "../assets/tools/4.svg";
import Tool5 from "../assets/tools/5.svg";

const PoweringTools = () => {
    const [animationIndex, setAnimationIndex] = useState(0);

    // Daftar gambar
    const tools = [Tool1, Tool2, Tool3, Tool4, Tool5];

    // Effect untuk mengubah gambar secara otomatis
    useEffect(() => {
        const interval = setInterval(() => {
            setAnimationIndex((prevIndex) => (prevIndex === tools.length - 1 ? 0 : prevIndex + 1));
        }, 2000); // Ganti gambar setiap 2 detik

        return () => clearInterval(interval);
    }, [tools.length]);

    // Debugging log
    console.log("PoweringTools component rendered");

    return (
        <div className="flex flex-col items-center justify-center bg-customNavy">
            <div className="container mb-12 mt-12 sm:mt-0 text-center">
                <h1 className="text-center text-1xl font-bold mb-8 text-white">Powering tools</h1>
                <div className="relative overflow-hidden">
                    <div className="flex gap-3 w-full" style={{ transform: `translateX(-${animationIndex * 100}%)`, transition: "transform 1s ease-out" }}>
                        {tools.map((tool, index) => (
                            <img
                                key={index}
                                src={tool}
                                alt={`Tool ${index + 1}`}
                                className="h-12 md:h-16 lg:h-20"
                                style={{ minWidth: "100%", maxWidth: "100%", objectFit: "contain" }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PoweringTools;

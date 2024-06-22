import React from "react";
import Tool1 from "../assets/tools/1.svg";
import Tool2 from "../assets/tools/2.svg";
import Tool3 from "../assets/tools/3.svg";
import Tool4 from "../assets/tools/4.svg";
import Tool5 from "../assets/tools/5.svg";

const ToolsLogo = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="container mb-12 mt-12 sm:mt-0 text-center">
                <h1 className="text-center text-1xl font-bold mb-8">Powering tools</h1>
                <div className="py-6 md:px-32 flex flex-wrap items-center justify-evenly gap-3">
                    <img src={Tool1} alt="" />
                    <img src={Tool2} alt="" />
                    <img src={Tool3} alt="" />
                    <img src={Tool4} alt="" />
                    <img src={Tool5} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ToolsLogo;

import React from "react";
import Navbarbtn from "./Navbarbtn";


export default function Navigation() {
    return(
    <>
        <div className="fixed bottom-0 left-0 md:-inset-0 h-16 md:h-12 bg-opacity-50 bg-white shadow-md z-50 w-full px-2 py-0 flex justify-between items-center">
            <div className="flex text-center w-full">
                <Navbarbtn/>
            </div>
        </div>
    </>
    )


}
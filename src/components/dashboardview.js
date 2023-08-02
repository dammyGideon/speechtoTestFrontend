import React from "react"
import myImage from "../assets/images/profile.png"
const DashboardView = () => {
    return (
        <div className="flex items-center justify-between h-[70x] shadow-lg px-[25px]">
            <div className="flex items-center rounded-[5px]">
               
            </div>

            <div className="flex items-center gap-[15px] relative">
                <div className="flex items-center gap-[25px] border-r-[1px] pr-[25px]">
                    {/* <FaRegBell/>
                    <FaEnvelope /> */}
                </div>
                <div className="flex items-center gap-[15px] relative">
                    <p>Admin</p>
                    <div className="h-[50px] w-[50px] rounded-full bg-[4E73DF] cursor-pointer flex items-center justify-center relative">
                        <img src={myImage} alt="profile picture"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardView
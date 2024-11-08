import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiCircleQuestion } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";
import { PiDotsNineBold } from "react-icons/pi";
import Avatar from "react-avatar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText, setUser } from "../redux/appSlice";
import { AnimatePresence, motion } from "framer-motion";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";





export default function Navbar() {
    const [input, setInput] = useState("");
    const [toggle, setToggle] = useState(false);
    const {user} = useSelector(store=>store.appSlice);
    const dispatch = useDispatch();
    const signOutHandler = () => {
        signOut(auth).then(()=>{
            dispatch(setUser(null));
        }).catch((err)=>{
            console.log(err);
        })
    }



    useEffect(() => {
        dispatch(setSearchText(input))

    }, [input])




    return (
        <div className="flex items-ceter justify-between mx-3 h-16">
            <div className="flex items-center gap=10">
                <div className="flex items-center gap-2">
                    <div className=" p-3 rounded-full hover:bg-gray-100 cursor-pointer">
                        <RxHamburgerMenu size={"20px"} />
                    </div>
                    <img className="w-8  " src={user?.photoURL} alt="gmail logo" />
                    <h1 className="text-2xl text-gray-500 font-medium">Gmail</h1>
                </div>
            </div>
            <div className="md:block hidden w-[50%] mr-60">
                <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
                    <IoIosSearch size={"24px"} className="text-gray-700"></IoIosSearch>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Search Mail"
                        className="rounded-full w-full bg-transparent outline-none px-1">

                    </input>
                </div>
            </div>
            <div className="md:block hidden">
                <div className="flex items-center gap-2">
                    <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
                        <CiCircleQuestion />
                    </div>
                    <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
                        <IoMdSettings />
                    </div>
                    <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
                        <PiDotsNineBold />
                    </div>
                    <div className="relative cursor-pointer">
                        <Avatar onClick={() => setToggle(!toggle)} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" size="40" round={true} />
                        <AnimatePresence>
        {toggle && (
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.1 }}
                className="absolute right-2 z-20 shadow-lg bg-white rounded-md" // Correct usage here
            >
                <p onClick={signOutHandler} className="p-2 underline">Logout</p>
            </motion.div>
        )}
    </AnimatePresence>
                    </div>
                </div>

            </div>
        </div>
    );
}

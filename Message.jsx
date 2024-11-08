import { RiStarLine } from "react-icons/ri";
import { MdCropSquare } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedEmail } from "../redux/appSlice";
import {motion} from "framer-motion";

export default function Message ({email}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
   
    const openMail = () => {
        dispatch(setSelectedEmail(email));
        navigate(`/mail/${email.id}`);

    }
    return(
        <motion.div

        initial={{opacity:0,y:-20}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.5}}
        
        
        onClick={openMail} className="flex items-start justify-between border-b border-gray-200 px-4 py-1 text-sm hover:cursor-pointer hover:shadow-md">
            <div className="flex items-center gap-3">
                <div className="flex-none text-gray-300">
                    <MdCropSquare classNamew-5 h-5></MdCropSquare>
                </div>
                <div className="flex-none text-gray-300">
                    <RiStarLine classNamew-5 h-5></RiStarLine>
                </div>
                <div>
                    <h1 className="font-semibold">{email?.to}</h1>
                </div>


                <div className="flex-1 ml-4">
                    <p className="text-gray-600 truncate inline-block max-w-full">
                        {email?.message}</p>
                </div>
                <div className="flex-none text-gray-400 text-sm">
                    <p>{new Date(email?.createdAt?.seconds * 1000).toLocaleString()}</p>
                </div>
            </div>
        </motion.div>

    )
}
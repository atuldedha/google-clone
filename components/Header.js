import { XIcon, MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import Image from "next/image"
import { useRouter } from "next/router"
import { useRef } from "react";
import Avatar from './Avatar'
import HeaderOptions from "./HeaderOptions";

const Header = () => {

    const searchInputRef = useRef(null);
    const router = useRouter();

    const search = (e) => {
        e.preventDefault();

        const term = searchInputRef.current.value;

        if(!term) return;

        router.push(`/search?term=${term}`)
    }

    return (
        <header className = "sticky top-0 bg-white">
            <div className = "flex w-full p-6 items-center">
                <Image 
                    className = "cursor-pointer"
                    onClick = {() => router.push("/")}
                    src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
                    height = {40}
                    width = {120}
            
                />

                <form className = "flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5">

                    <input 
                        className = "flex-grow w-full focus:outline-none "
                        ref = {searchInputRef} 
                        type = "text" 
                    />

                    <XIcon 
                        className = "h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3"
                        onClick = {() => (searchInputRef.current.value = "")}
                    />

                    <MicrophoneIcon  className = "h-6 mr-3 hidden sm:inline-flex text-blue-500 pl-4 border-gray-300 border-l-2" />

                    <SearchIcon  className = "h-6 text-blue-500 hidden sm:inline-flex"/>

                    <button hidden onClick = {search} type = "submit" >Search</button>
                </form>

                <Avatar 
                
                    className = "ml-auto"
                    url = "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"
                    
                />
            </div>

            <HeaderOptions />
            
        </header>
    )
}

export default Header

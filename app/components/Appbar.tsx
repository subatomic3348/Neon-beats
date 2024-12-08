"use client"

import { div, link } from "framer-motion/client"
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
import { Button } from "../../components/ui/button"



export const Appbar = () => {
    const session = useSession()


    return (
        
        <div className="sticky top-0  z-20 w-half bg-black/30 backdrop-blur-md shadow-lg border border-neutral-200/10 p-1 ">
      <div className="text-md flex justify-between  text-white font-cyberpunk font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 bg-opacity-0">
       
         <Link  className=" text-2xl px-8 py-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 pt-4 ps-10" href={"/"}>
            Neon

           

        </Link>
        
        
      

        <div className=" p-2">
            {session.data?.user && <Button onClick={() => signOut()} className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"> Logout</Button> }
           {!session.data?.user && <Button onClick={() => signIn()} className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"> Signin </Button>}
        </div>
 

    </div>
    </div>
    )
}

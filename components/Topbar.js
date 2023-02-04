import Image from "next/image";
import logo from "../public/logo.png";
import { useSession, signIn , signOut } from 'next-auth/react'
import Router from "next/router";

const Topbar = () => {
  const { data:session } = useSession();
  
  return (
      <>
      <div className="flex flex-row items-center w-screen h-16">
          <Image src={logo} alt="" width={200} className="mx-2 mt-4 cursor-pointer"
          onClick={() => Router.push(`/`)} />
          <div className="flex flex-grow justify-end gap-3 mx-6 mt-4">
            <button className="flex justify-center items-center h-10 w-20 border border-white rounded-md hover:shadow-sm hover:bg-white hover:text-black">
              English
            </button>

            {session && session.user ? (
            <button 
            onClick={()=> signOut()}
            className="flex justify-center items-center bg-red-600 h-10 w-20 rounded-md hover:shadow-sm hover:bg-red-700">
              Sign Out
            </button> ) : (
              <button 
              onClick={()=> signIn()}
              className="flex justify-center items-center bg-red-600 h-10 w-20 rounded-md hover:shadow-sm hover:bg-red-700"> SignIn
                 </button>
            )}


          </div>
          </div>
      </>
      
  )
  }
export default Topbar
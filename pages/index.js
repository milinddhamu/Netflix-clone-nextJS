import Head from "next/head";
import Image from "next/image";
import logo from "../public/logo.png";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import mybackground from "../public/background-netflix.jpg";
import response from "../utils/requests";
import Router from 'next/router'
import Nav from "@/components/Nav";
import Topbar from '@/components/Topbar';
import requests from "../utils/requests";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data:session } = useSession();

  


  return (
    <>
      <div className="h-screen w-screen bg-[url('../public/background-netflix.jpg')] bg-cover top-0 z-0">  
       <Topbar session={session}/>     
        <div className="h-screen flex flex-col gap-4 px-20 justify-center items-center text-center place-content-center ">
          <h1 className="font-bold text-5xl ">
            Unlimited movies, TV shows, and more.
          </h1>
          <h2 className="text-2xl">Watch anywhere. Cancel anytime.</h2>
          <h3 className="text-xl">
            Ready to watch? Enter your email to create your membership
          </h3>
          <div className="flex flex-row gap-0 w-5/12 h-12 shadow-xl">
            <input
              type="text"
              placeholder="EMAIL ADDRESS"
              className="flex flex-1 outline-none px-4 text-sm"
            ></input>
            <button className="h-inherit w-32 bg-red-600 text-sm hover:shadow-sm hover:bg-red-700 "
            onClick={() => Router.push('/movies')}>
              GET STARTED!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}





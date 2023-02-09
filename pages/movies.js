import Nav from "@/components/Nav";
import Results from "../components/Results";
import requests from "@/utils/requests";
import { useSession, signOut } from "next-auth/react";
import Home from ".";
import Topbar from "@/components/Topbar";

function movies ({results}) {
  const {data:session} = useSession();
  return (
          <>
          {session && session.user ? (
            <>
            <Topbar/>
            <Nav/>
            <Results results={results}/>
            </>
          ) : (
            <>
            <Home/>
            </>
          )
          }
        </>
    

)
  }

export default movies;

export async function getServerSideProps(context){
  const genre = context.query.genre;
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`
  ).then(response => response.json());
return {
  props : {
    results :request.results,
  },
}
}

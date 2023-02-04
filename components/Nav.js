import Results from "@/components/Results";
import requests from "@/utils/requests";
import { useRouter } from "next/router";

function Nav() {
const router = useRouter();

  return (
    <>
      <nav className="top-0 w-screen flex flex-row gap-10 text-xl justify-center mt-2 p-3">
        {Object.entries(requests).map(([key, { title, url }]) => (
            <h3
              key={key}
              onClick={() => router.push(`/movies/?genre=${key}`)}
              className="last:pr-24 cursor-pointer transition duration-150 transform
        hover:scale-105 hover:text-red-400 active:text-red-600"
            >
              {title}
            </h3>
        ))}
      </nav>
    </>
  );
}

export default Nav;

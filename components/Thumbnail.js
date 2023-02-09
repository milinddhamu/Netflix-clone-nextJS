import Image from 'next/image'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { forwardRef } from 'react';
import Details from '../pages/Details';
import Router from 'next/router';

const Thumbnail = forwardRef(({result}, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original"
  return (
    <div 
    className='p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'
    onClick={() => Router.push('/Details')}>
      <Image layout='responsive'
        src={`${BASE_URL}${result.backdrop_path || result.poster_path}`}
        height={1080}
        width={1920}
        className='rounded-xl'
        alt={""}
        
      
      />
      <div className='p-2'>
        <p className='truncate max-w-md '
        >{result.overview}</p>
        <h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold group-hover:text-red-600'>{result.title || result.original_name}</h2>
        <p className='flex items-center text-sm opacity-0 group-hover:opacity-100'>
        {result.media_type && `${result.media_type}`}{" "}
        {result.release_date || result.first_air_date}{" "}       
        <div className='flex items-center'>
        <ThumbUpOutlinedIcon className='h-4 mx-1'/> {result.vote_count}
        </div>
        </p>
      </div>
    </div>
  );
})

export default Thumbnail;

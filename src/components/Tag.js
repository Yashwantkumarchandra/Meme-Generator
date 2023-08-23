import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Tag = () => {
  const [tag,setTag] = useState('Dog')
  const {gif,loading,fetchData} = useGif(tag)
  
 
  return (
    <div className='w-1/2 h-[450px]  bg-blue-500 border rounded-lg border-black
    flex flex-col items-center gap-y-5 mt-[15px]' >
        <h1 className='mt-[15px] text-2xl underline font-bold uppercase '>Random {tag} Gif</h1>
       {
        loading ? (<Spinner />) :  <img src={gif} width="450"/>
       }
       <input type='text'
       className='w-10/12 text-lg py-2  text-center rounded-lg mb-[3px]'
       onChange={(event)=> setTag(event.target.value)}
       value={tag}
       />
        <button onClick={()=>fetchData(tag)}
        className='w-10/12 
        bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]'>Generate</button>
    </div>
  )
}

export default Tag
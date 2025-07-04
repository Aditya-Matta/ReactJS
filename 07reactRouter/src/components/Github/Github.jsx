import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData() // optimised
    // const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch("https://api.github.com/users/Aditya-Matta")
    //   .then(response => response.json())
    //   .then(data => {
    //     setData(data)
    //   })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white text-3xl p-4'>Github Followers: {data.followers}
    <img className='' src={data.avatar_url} alt="Git Picture" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Aditya-Matta")
  return response.json()
}
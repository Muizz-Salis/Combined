import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ShowApi = () => {
    const {username}= useParams()
    console.log(username);
    const url = `https://api.github.com/users/${username}`
    const [data, setData] = useState([])
    const [isLoading, setIsloading] = useState(false)
    useEffect(() => {
        axios.get(url)
        .then((response)=>{
        console.log(response);
        setData(response.data)
        }).catch((err)=>{
            console.log(err);
        })
    }, [])
    


  return (
    <>
    <div className='border border-danger'>
        <img src={data.avatar_url} className="w-50"alt="" />
        <div className=''>{data.login}</div>
        <div className=''>{data.type}</div>
    </div>
    
    
    </>
  )
}

export default ShowApi
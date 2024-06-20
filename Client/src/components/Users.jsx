import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Users = () => {
  const [data, setData] = useState([])
  let url = "https://api.github.com/users"
  const navigate = useNavigate()

  const getData =()=>{
        axios.get(url)
        .then((response)=>{

          console.log(response);
          setData(response.data)
        })
    }
    useEffect(() => {
     getData()
    }, [])
    
  return (
    <>
    <button onClick={getData}className='d-none'>Fetch Data</button>

   <div className=' row p-3 shadow m-5 gap-2 mx-auto'>

   {
        data.map((items)=>(
          <div key={items.id} className='col-2 mb-2 p-2 mx-auto text-center shadow'>
            <p>{items.login}</p>
            <h1>{items.type}</h1>
            <img src={items.avatar_url} alt=""className='w-75 rounded-pill' />
            <button className='bg-success text-white' onClick={()=>navigate(`/users/user/${items.login}`)}>View Profile</button>
          </div>
        ))
    }
   </div>

    </>
  )
}

export default Users
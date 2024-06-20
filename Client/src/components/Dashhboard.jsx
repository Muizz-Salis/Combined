import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Dashhboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([])
    const getData = () =>{
      let url ="http://localhost:5000/dashboard"
      axios.get(url)
      .then((response)=>{
        console.log(response.data);
        setData(response.data.data)
      })
    }
    const token = localStorage.getItem("token")
    console.log(token);
    useEffect(() => {
      getData()
    axios.get("http://localhost:5000/verifyUser",{
      headers: {
        Authorization: `Bearers ${token}`,
        "Content-Type": "Application/json",
        Accept: "Application/json",
      },
    }).then((res)=>{
      console.log(res.data);
      if(!res.data.status){
        localStorage.removeItem("token");
        navigate('/signin')
      }else{
        console.log('working')
      }
    })

    }, [])
    

  return (
    <div>
      <h1>Welcome to Dashboard</h1>

    <button onClick={getData}>Get Data</button>
    {
      
      data.map((item,index)=>(
        <div key={index}>
          <h1>{item.firstName}</h1>
          <h1>{item.lastName}</h1>
          <h1>{item.email}</h1>
        </div>
      ))
    }
      </div>
  )
}

export default Dashhboard
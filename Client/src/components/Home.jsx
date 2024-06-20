import React, { useState } from 'react'
import axios from "axios"


const Home = () => {
  const [data,setData] = useState([])
  let url = 'https://api.github.com/search/repositories?q=XXX'
  const fetchData = () => {
    axios.get(url)
    .then((res) => {
      console.log(res.data);
      // setData(res.data.data)
  }) .catch((err) => {
    console.log(err);
  });
}

  
  return (
    <>
    <button onClick={fetchData}>Fetch</button>
    {/* {
      data.map((item)=>{
        <div key={item.id}>
          <p>{item.name}</p>
          <p></p>
            <img src="" alt="" />
        </div>
      })
      
    } */}
    </>
  )
}

export default Home
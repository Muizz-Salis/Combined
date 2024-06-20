import axios from 'axios'

const ListOfStudent = () => {
    let url = "http://localhost:5000/sign_up"
    function getData() {
        axios.get(url).then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
console.log(err);
        })
    }
  return (
    <div>
        <button onClick={getData}>Click</button>
    </div>
  )
}

export default ListOfStudent
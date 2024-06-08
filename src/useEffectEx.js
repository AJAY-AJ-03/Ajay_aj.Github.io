import { useState, useEffect} from "react";

const UseEffectEx = () => {
  const[post, setPost] = useState("all")

  useEffect(()=>{
    console.log("useEffect hit");
  },[post])
  return (
    <div>
      <button onClick={()=>{setPost("all")}}>All</button>
      <button onClick={()=>{setPost("veg")}}>veg</button>      <button onClick={()=>{setPost("non-veg")}}>non-veg</button>
    </div>
  )
}
export default UseEffectEx
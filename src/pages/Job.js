import { useNavigate } from "react-router-dom";
import Job from "../components/Job";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect } from "react";

export default function Jobs(){
const [logedIn, setLogedIn] = useLocalStorage('logedIn', [false])
  const navigate = useNavigate()

  useEffect(()=>{
    if (logedIn[0] === false){
      navigate('/client')
  }
  },[])
  
    return(
        <div className="container">
        <a href="/home" className="btn btn-outline-primary btn-sm mt-3"><i className="bi bi-arrow-left"></i></a>
        <Job/>
        </div>
        
    )
}
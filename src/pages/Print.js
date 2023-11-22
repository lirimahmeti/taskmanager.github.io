import { useEffect } from "react";
import Job from "../components/Job";
import { useLocalStorage } from "@uidotdev/usehooks";

export default function Jobs(){
    const [logedIn, setLogedIn] = useLocalStorage('logedIn', [false])
    const navigate = useNavigate()

    useEffect(()=>{
        if (logedIn[0] === false){
        navigate('/client')
    }
    },[]) 
  
    return(
        <Job/>
    )
}
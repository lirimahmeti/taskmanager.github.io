import { Button } from "react-bootstrap";
import JobsTable from "../components/JobsTable";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
        <div className="container">
        <JobsTable/>
        </div>
        
    )
}
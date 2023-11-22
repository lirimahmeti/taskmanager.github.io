import { Button } from "react-bootstrap";
import PrintModal from "../components/Modal";
import JobsTable from "../components/JobsTable";
import SearchJobs from "../components/SearchJobs";
import SubmitForm from "../components/SubmitForm";
import { useEffect, useState } from "react";
import NavBari from "../components/NavBari";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useNavigate } from "react-router-dom";

function Home() {
  const [logedIn, setLogedIn] = useLocalStorage('logedIn', [false])
  const navigate = useNavigate()

  useEffect(()=>{
    if (logedIn[0] === false){
      navigate('/client')
  }
  },[])
  
  return (
    <div>
        <NavBari/>
        <SearchJobs text='Skano barcode-in ose shkruaj shifren.' labelText='Menaxho punën:' location='home'/>
        <SubmitForm />
        <div className='container'>
        <JobsTable currStat={'new'}/>
        </div>
    </div>
  )
}

export default Home
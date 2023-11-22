import React, { useEffect } from 'react'
import SettingsComp from '../components/SettingsComp'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '@uidotdev/usehooks'

function Settings() {
  const [logedIn, setLogedIn] = useLocalStorage('logedIn', [false])
  const navigate = useNavigate()

  useEffect(()=>{
    if (logedIn[0] === false){
      navigate('/client')
  }
  },[])
  
  return (
    <div className='container'>
        <a href="/home" className="btn btn-outline-primary btn-sm mt-3"><i className="bi bi-arrow-left"></i></a>
        <h3 className='text-center'>Konfigurimi letres</h3>
        <SettingsComp/>
    </div>
  )
}

export default Settings
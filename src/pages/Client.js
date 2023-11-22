import React from 'react'
import SearchJobs from '../components/SearchJobs'
import NavBari from '../components/NavBari'

function Client() {
  return (
    <>
    <NavBari/>
    <SearchJobs text='Shkruaj shifrën e barcodit' labelText='Shiko statusin e telefonit tuaj.'/>
    </>
    
  )
}

export default Client
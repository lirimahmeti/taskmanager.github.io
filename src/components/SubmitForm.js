import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Clock} from './helpers.js/dateAndTime';
import { useLocalStorage } from "@uidotdev/usehooks";
import { useNavigate } from 'react-router-dom';

function SubmitForm(){
    const [emri, setEmri] = useState('')
    const [kodi, setKodi] = useState()
    const [nrTel, setNrTel] = useState()
    const [desc, setDesc] = useState('')
    const [db_job, saveJob] = useLocalStorage('jobs',[])
    const navigate = useNavigate()

    //marrja e values per emrin
    const handleNameKeyUp = (e) =>{
        setEmri(e.target.value)
    }
    //marrja e values per kodin
    const handleCodeKeyUp = (e) =>{
        setKodi(e.target.value)
    }
    //marrja e values per kontakt
    const handleTelKeyUp = (e) =>{
        setNrTel(e.target.value)
    }
     //marrja e values per description
     const handleDescKeyUp = (e) =>{
        setDesc(e.target.value)
    }
    
    const id = db_job.length

    // krijimi i punes se pranuar 
    const job = {
        name: emri,
        kodi: kodi,
        kontakt: nrTel,
        desc: desc,
        date: Clock().date,
        time: Clock().time,
        status: 'new',
        id: id
    }
    

    function submitForm(e){
        e.preventDefault()
        if (emri != ''){
            e.target.reset()
            console.log(job);
            saveJob([...db_job, job])
            if (window.confirm('Printo tiketën?')){
                navigate(`/print/${id}`)
            }
        }else{
            alert('Mbush formen')
        }
    }

    return (
        <Form className='container border rounded p-3' onSubmit={submitForm}>
          <Form.Group className="mb-3" controlId="clientInfo">
            <Form.Label>Emri Klientit:</Form.Label>
            <Form.Control type="text"  placeholder="Filan Fisteku" className='mb-3' required onKeyUp={handleNameKeyUp}/>
            <Form.Label>Kodi telefonit:</Form.Label>
            <Form.Control type="text" placeholder="123456" className='mb-3' onKeyUp={handleCodeKeyUp}/>
            <Form.Label>Nr Kontaktues:</Form.Label>
            <Form.Control type="number" placeholder="044123123" className='mb-3' onKeyUp={handleTelKeyUp}/>
            <Form.Label>Pershkrimi:</Form.Label>
            <Form.Control as="textarea" rows={3} onKeyUp={handleDescKeyUp} />
          </Form.Group>
          <Button type="submit">Prano</Button>
        </Form>
      );
}

export default SubmitForm
import React, { useEffect, useState } from 'react'
import Badge from 'react-bootstrap/Badge';
import Table from 'react-bootstrap/Table';
import { useLocalStorage } from "@uidotdev/usehooks";
import status from './helpers.js/statusStyle';
import { Button, Form, Row, Col } from 'react-bootstrap';
import {Clock, getTimePassed, colorizeTime} from './helpers.js/dateAndTime';


function JobsTable() {
    const [db_jobs, saveJob] = useLocalStorage('jobs',[])
    const [stat, setStat] = useState('new')
    const [search, setSearch] = useState('')
    const rev_db_jobs = [...db_jobs].reverse()
    const filtered = rev_db_jobs.filter(job => ( job.status == stat ))

 
    const kohaMomentale = `${Clock().date} ${Clock().time}`
   
    const showAll = ()=>{
        setStat('all')
    }
    const filterNew = ()=>{
        setStat('new')
    }
    const filterNukRregullohet = ()=>{
        setStat('nuk rregullohet')
    }
    const filterNeProces = ()=>{
        setStat('në proces')
    }

    const composeColor = (status,dbTime, currTime) =>{
        const kohaKaluar = getTimePassed(dbTime, currTime)
       
        return colorizeTime(status, kohaKaluar)
    }
  return (
    <div className='mt-5'>
    <p className='text-secondary'>Filter</p>
        <Button variant="success" onClick={showAll} className='me-2 '>All tasks</Button>
        <Button variant="primary" onClick={filterNew} className='m-2'>New</Button>
        <Button variant="danger" onClick={filterNukRregullohet} className='m-2'>Nuk Rregullohet</Button>
        <Button variant="warning" onClick={filterNeProces} className='ms-2 '>Në proces</Button>
        <Form >
        <Row>
          <Col className='my-3'>
            <Form.Control
              type="text"
              placeholder="Kërko punët me emër..."
              className="mr-sm-2"
              onChange={(e) => {setSearch(e.target.value);}}
            />
          </Col>
        </Row>
      </Form>
    <Table striped bordered hover> 
      <thead>
        <tr>
          <th>#</th>
          <th>Klienti</th>
          <th>Pranuar</th>
          <th>Kontakti</th>
          <th>Statusi</th>
        </tr>
      </thead>
      <tbody>
        {(
          (stat=="all") ? 
          rev_db_jobs.filter((job)=>{return search.toLowerCase() === '' ?
          job :
          job.name.toLowerCase().includes(search.toLowerCase())}) :
          filtered.filter((job)=>{return search.toLowerCase() === '' ?
          job :
          job.name.toLowerCase().includes(search.toLowerCase())})).map((job) => (
        <tr key={job.id}>
            <td>
              {job.id}
            </td>
            <td>
              {job.name}
              <Badge 
                bg={status(job.status)}
              >
              {job.status}
              </Badge>
            </td>
            <td>{job.date},
                {job.time}
                <p
                className={`text-${composeColor(job.status, `${job.date} ${job.time}`, kohaMomentale)}`}>
                  {getTimePassed(`${job.date} ${job.time}`, kohaMomentale)}
                </p>
            </td>
            <td>
              {job.kontakt}
              </td>
            <td align='center'><a href={`/print/${job.id}`} className='btn btn-outline-primary'><i className="bi bi-printer"></i></a> <a href={`/job/${job.id}`} className='btn btn-outline-success'>Përditso</a></td>
        </tr>
        ))}
      </tbody>
    </Table>
    
    </div>
  )
}

export default JobsTable
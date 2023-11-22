import React, { useEffect } from 'react'
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import status from './helpers.js/statusStyle';
import NoResults from './NoResults';

function JobClient({job, elapsedTime}) {
    
    return (
        <div className='mt-3'>
                <Card>
                    <Card.Header className='d-flex justify-content-between align-items-center'>
                        Statusi i telefonit që keni lënë:
                        <a href={`tel:043555700`}className='btn btn-outline-success'>
                            <i className="bi bi-telephone"></i>
                        </a>
                    </Card.Header>
                    <Card.Body>
                    <Card.Title>{job.name}<Badge bg={status(job.status)}>{job.status}</Badge></Card.Title>
                        <Card.Text className='text-secondary'>
                            {job.date} {job.time}
                        </Card.Text>
                        <Card.Text>
                            <b>Pershkrimi:</b> {job.desc}
                        </Card.Text>
                        <Table striped bordered hover className=' mt-3'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Kodi</th>
                                    <th>Kontakti</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{job.id}</td>
                                    <td>{job.kodi}</td>
                                    <td>{job.kontakt}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">{elapsedTime}</small>
                    </Card.Footer>
                </Card>
            </div>
      )
}

export default JobClient
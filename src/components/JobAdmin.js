import React from 'react'
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import status from './helpers.js/statusStyle';

function JobAdmin({job, onGati, onNeProces, onPerfunduar, onNukRregullohet, elapsedTime}) {
  return (
    <div className='mt-3'>
            <Card>
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    Detajet e punës së pranuar.
                    <a href={`/print/${job.id}`}className='btn btn-outline-primary'>
                        <i className="bi bi-printer"></i>
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
                <div className='d-flex flex-column align-items-start'>
                    <h4>Dokumento statusin</h4>
                    <div className='d-flex flex-row justify-content-between w-100'>
                        <div className='d-inline'>
                        <Button variant="warning" className='mx-1' onClick={onNeProces}>Në Proces</Button>
                        <Button variant="primary" className='mx-1' onClick={onGati}>Gati</Button>
                        <Button variant="success" className='mx-1' onClick={onPerfunduar}>Perfunduar</Button>
                        </div>
                        <Button variant="danger" onClick={onNukRregullohet}>Nuk rregullohet</Button>
                    </div>
                </div>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">{elapsedTime}</small>
                </Card.Footer>
            </Card>
        </div>
  )
}

export default JobAdmin
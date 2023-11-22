import { useLocalStorage } from '@uidotdev/usehooks'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table'
import status from './helpers.js/statusStyle';
import NoResults from './NoResults';
import {Clock, getTimePassed} from './helpers.js/dateAndTime';
import JobAdmin from './JobAdmin';
import JobClient from './JobClient';


function Job({input_id}) {
    const {id} = useParams()
    const [db_jobs, saveJob] = useLocalStorage('jobs')
    const [logedIn, setLogedIn] = useLocalStorage('logedIn')
    const desId = (input_id === undefined)? id: input_id
    var toggleNoResult = false
    const job = (db_jobs.filter((job) => (job.id == desId)).length == 0)? toggleNoResult = true: db_jobs.filter((job) => ( job.id == desId ))[0]
    
    const kohaPranimit = `${job.date} ${job.time}`
    const kohaMomentale = `${Clock().date} ${Clock().time}`
    const elapsedTime = getTimePassed(kohaPranimit, kohaMomentale)
    

    const handlePerfunduar = () =>{
        const updatedDb = db_jobs.map((item) => (item.id === job.id) ? { ...item, status: 'përfunduar' } : item);
        saveJob(updatedDb)
    }
    const handleNeProces = () =>{
        const updatedDb = db_jobs.map((item) => (item.id === job.id) ? { ...item, status: 'në proces' } : item);
        saveJob(updatedDb)

    }

    const handleGati = () =>{
        const updatedDb = db_jobs.map((item) => (item.id === job.id) ? { ...item, status: 'gati' } : item);
        saveJob(updatedDb) 
    }
    const handleNukRregullohet= () =>{
        const updatedDb = db_jobs.map((item) => (item.id === job.id) ? { ...item, status: 'nuk rregullohet' } : item);
        saveJob(updatedDb) 
    }
 
    // me ndrru statusin e jobit permes tastieres (me shti ne useEffect i bojke duplicate)   
        const handleKeyPress = (e) =>{
            const key = e.key
            if(key == 'Enter'){
                handlePerfunduar()
            }
            if(key == 'g'){
                handleGati()
            }
            if(key == 'p'){
                handleNeProces()
            }
            if(key == 'x'){
                handleNukRregullohet()
            }
           
        }

        
    //nese jemi te bom login
    if(logedIn[0] !== false){
    
        window.addEventListener('keydown', handleKeyPress)
        if(toggleNoResult === true){
            return (
                <NoResults/>
            )
        }
        if (toggleNoResult === false){
            return (
            <JobAdmin 
                job={job}
                onGati={handleGati}
                onNeProces={handleNeProces}
                onPerfunduar={handlePerfunduar}
                onNukRregullohet={handleNukRregullohet}
                elapsedTime={elapsedTime}/>
            )
        }
    }
    //nese nuk jemi tbom login
    if(logedIn[0] === false){
        if(toggleNoResult === true){
            return (
                <NoResults/>
            )
        }if (toggleNoResult === false){
            return (
            <JobClient 
                job={job}
                elapsedTime={elapsedTime}
            />
            )
        }
    }
    
}

export default Job
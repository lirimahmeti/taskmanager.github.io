import React, { useState, useRef, useEffect } from 'react'
import Barcode from 'react-barcode'
import { useParams } from 'react-router-dom';
import ReactToPrint from 'react-to-print'
import { useLocalStorage } from '@uidotdev/usehooks';

 



function PrintJob() {
    
    const [setting, setSettings] = useLocalStorage('settings', {
        paperWidth: '40',
        paperHeight: '25',
        print2pages: true
    })
   
    const {paperWidth, paperHeight, print2pages, barcodeWidth, barcodeHeight, barcodeTextSize, dateTextSize, nameTextSize} = setting
    
    const pageStyle = `
        @page {
            size: ${paperWidth}mm ${paperHeight}mm;
        };

        @media all{
            .pageBreak {
                display: none;
            };
        };

        @media print{
            .pageBreak {
                page-break-before: always;
            };
        };

    `

    
    const [db_jobs, saveJob] = useLocalStorage('jobs',[])

    const {id} = useParams()
    const ref = useRef();
    const [job] = db_jobs.filter((job)=>job.id == id)

    useEffect(()=>{
        document.querySelector('.print-button').click()
    },[])
    if(print2pages == true){
          return (
        <div>
            <div className='label border d-flex flex-column align-items-center justify-content-between' ref={ref} style={{width: `${paperWidth * 3.8}px`, height: `${(paperHeight * 3.8)*2}px`}}>
                <div className='w-100'>
                    <p className='m-0' style={{fontSize:  `${dateTextSize}px`}}>{job.date}, {job.time}</p>
                    <p className='m-0' style={{fontSize: `${nameTextSize}px`}}>{job.name}</p>
                </div>
                <Barcode width={barcodeWidth} height={barcodeHeight} value={id} fontSize={barcodeTextSize} margin={6}/>
                <div className='w-100'>
                    <p className='m-0' style={{fontSize: `${dateTextSize}px`}}>{job.date}, {job.time}</p>
                    <p className='m-0' style={{fontSize: `${nameTextSize}px`}}>{job.name}</p>
                </div>
                <Barcode width={barcodeWidth} height={barcodeHeight} value={id} fontSize={barcodeTextSize} margin={6}/>
            </div>   
                
            <ReactToPrint 
            trigger={() => <button className='print-button'>Print</button>}     
            content={()=>ref.current}
            pageStyle={pageStyle}
            />
            <a href='/home'>Kthehu</a>
        </div>
  )}else{
    return (
        <div>
            <div className='label border d-flex flex-column align-items-center justify-content-between' ref={ref} style={{width: `${paperWidth * 3.8}px`, height: `${(paperHeight * 3.8)}px`}}>
                <div className='w-100'>
                    <p className='m-0' style={{fontSize: `${dateTextSize}px`}}>{job.date}, {job.time}</p>
                    <p className='m-0' style={{fontSize: `${nameTextSize}px`}}>{job.name}</p>
                </div>
                <Barcode width={barcodeWidth} height={barcodeHeight} value={id} fontSize={barcodeTextSize} margin={6}/>
            </div>   
                
            <ReactToPrint 
            trigger={() => <button className='print-button'>Print</button>}     
            content={()=>ref.current}
            pageStyle={pageStyle}
            />
            <a href='/home'>Kthehu</a>
        </div>
  )}
}

export default PrintJob
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useLocalStorage } from "@uidotdev/usehooks";
import Barcode from 'react-barcode'
import ReactToPrint from 'react-to-print'



function SettingsComp() {
    const [settings, setSettings] = useLocalStorage('settings', [])
    const [kuHeight, setKuHeight] = useState(25)
    const [kuWidth, setKuWidth] = useState(40)
    const [bTextSize, setBTextSize] = useState(7)
    const [bWidth, setBWidth] = useState(1.5)
    const [bHeight, setBHeight] = useState(30)
    const [dateSize, setDateSize] = useState(12)
    const [nameSize, setNameSize] = useState(12)

    const handleSubmit = (e) =>{
        e.preventDefault()
        const width = e.target[0].value
        const height = e.target[1].value

        const print2 = e.target['twocopies'].checked
        console.log(print2);

        setSettings({
            paperWidth: +kuWidth,
            paperHeight: +kuHeight,
            print2pages: print2,
            barcodeWidth: +bWidth,
            barcodeHeight: +bHeight,
            barcodeTextSize: +bTextSize,
            dateTextSize: +dateSize,
            nameTextSize: +nameSize
        })
        alert('Ndryshimi u bë me sukses')
        
    }

    const updateHeight = (e)=>{
        setKuHeight(e.target.value)
    }   
    const updateWidth = (e)=>{
        setKuWidth(e.target.value)
    }
    const updateBTextSize = (e)=>{
        setBTextSize(e.target.value)
    }
    const updateBHeight = (e)=>{
        setBHeight(e.target.value)
    }
    const updateBWidth = (e)=>{
        setBWidth(e.target.value)
    }
    const updateDateTextSize = (e)=>{
        setDateSize(e.target.value)
    }
    const updateNameTextSize = (e)=>{
        setNameSize(e.target.value)
    }



    return (
        <div className='mt-5 border p-4 rounded'>
            <Form  onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="width">
                    <Form.Label>Gjersia letrës (mm)</Form.Label>
                    <Form.Control type="number" placeholder="40mm" onKeyUp={updateWidth}/>
                    </Form.Group>
                                
                    <Form.Group as={Col} controlId="height">
                    <Form.Label>Lartësia letrës (mm)</Form.Label>
                    <Form.Control type="number" placeholder="25mm" onKeyUp={updateHeight}/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="btsize">
                    <Form.Label>Madhësia teksit të barkodit</Form.Label>
                    <Form.Control type="number" placeholder="Default: 12" onKeyUp={updateBTextSize} onChange={updateBTextSize}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="bwidth">
                    <Form.Label>Gjerësia barkodit</Form.Label>
                    <Form.Control type="number" placeholder="Default: 1.5" onKeyUp={updateBWidth} onChange={updateBWidth}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="btheight">
                    <Form.Label>Lartësia barkodit</Form.Label>
                    <Form.Control type="number" placeholder="Default: 30" onKeyUp={updateBHeight} onChange={updateBHeight}/>
                    </Form.Group>
                </Row>
                <Row className='mb-3'>
                    <Form.Group as={Col} controlId="btsize">
                        <Form.Label>Madhësia tekstit të datës</Form.Label>
                        <Form.Control type="number" placeholder="Default: 12" onKeyUp={updateDateTextSize} onChange={updateDateTextSize}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="btsize">
                        <Form.Label>Madhësia tekstit të emrit</Form.Label>
                        <Form.Control type="number" placeholder="Default: 12" onKeyUp={updateNameTextSize} onChange={updateNameTextSize}/>
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Printo dy kopje" name='twocopies'/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Ruaj
                </Button>    
            </Form>
            <div className='preview mt-4 d-flex align-items-end justify-content-center'>
                <div>
                    <span className='d-flex justify-content-around' style={{width:`${kuWidth *3.8}px`}}><i className="bi bi-arrow-left"></i> {kuWidth}mm <i className="bi bi-arrow-right"></i></span>
                    <div className='label border d-flex flex-column align-items-center justify-content-between p-1 rounded' style={{width: `${(kuWidth * 3.8)}px`, height: `${(kuHeight * 3.8)}px`}}>
                        <div className='w-100'>
                            <p className='m-0' style={{fontSize: `${dateSize}px`}}>11/17/2023, 1:40</p>
                            <p className='m-0' style={{fontSize: `${nameSize}px`}}>Emri Klientit</p>
                        </div>
                        <Barcode width={+bWidth} height={+bHeight} value={'75568'} fontSize={+bTextSize} margin={6}/>
                    </div>
                </div>
                <span className='d-flex justify-content-around flex-column' style={{height:`${kuHeight *3.8}px`}}><i className="bi bi-arrow-up"></i> {kuHeight}mm <i className="bi bi-arrow-down"></i></span>
                
            </div>
            
        </div>
      );
}

export default SettingsComp
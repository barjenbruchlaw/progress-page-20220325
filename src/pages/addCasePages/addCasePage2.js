import React, {useState} from 'react'
import PageNavBar from '../../components/PageNavBar'
import { Container, Row, Col, Form } from 'react-bootstrap'

const AddCasePage2 = () => {

    const [MOKS, setMOKS] = useState("MO")

    return (

        <div>

        <PageNavBar />

    <main className='page-main py-5'>
                <h1 className='text-center fw-bolder'>Add Case</h1>

                <Container>
                    <Row className="py-5">
                        <h4 className="fw-bold"> Enter the address information below:</h4>
                    </Row>

                    
                            <Form.Group className='mb-3' controlId='inputCaseAddress'>

                                <Row className='p-2'><Col xs={8}><Form.Label>Street Address</Form.Label>
                                <Form.Control placeholder='Enter Street Address' /></Col>
                                <Col xs={4}><Form.Label>Unit Number</Form.Label>
                                <Form.Control placeholder='Enter Unit Number' /></Col>
                                </Row>
                    
                                <Row className='p-2'><Col xs={6}><Form.Label>City</Form.Label>
                                <Form.Control placeholder='Enter City' /></Col>
                                <Col xs={3}><Form.Label>State</Form.Label>
                                <Form.Select aria-label="Select State" onChange={(e) => { setMOKS(e.target.value) }}>
                                    <option value="MO">Missouri</option>
                                    <option value="KS">Kansas</option>
                                </Form.Select></Col>
                                <Col xs={3}><Form.Label>ZIP Code</Form.Label><Form.Control placeholder='Enter ZIP Code' /></Col></Row>
                                

                                {/* This list should populate from the list of counties entered in the system maintenance area */}

                                <Row className='p-2'><Form.Label>County</Form.Label>
                                <Form.Select aria-label='Select County'>
                                    <option className='text-muted'>County</option>
                                    <option value="KS1">Douglas County, KS</option>
                                    <option value="KS2">Johnson County, KS</option>
                                    <option value="KS3">Leavenworth County, KS</option>
                                    <option value="KS4">Wyandotte County, KS</option>
                                    <option value="MO1">Boone County, MO</option>
                                    <option value="MO2">Buchanan County, MO</option>
                                    <option value="MO3">Cass County, MO</option>
                                    <option value="MO4">Clay County, MO</option>
                                    <option value="MO5">Jackson County, MO</option>
                                    <option value="MO6">Johnson County, MO</option>
                                    <option value="MO7">Lafayette County, MO</option>
                                    <option value="MO8">Platte County, MO</option>
                                    <option value="MO9">Ray County, MO</option>
                                </Form.Select></Row>

                            </Form.Group>

                        <Col className='p-5'>


                        </Col>
                    

                    <Row>
                        <Col className='px-5'></Col>
                        <Col>
                            <a href='/addCasePage1' className='btn btn-dark mx-5 px-5'>Back</a><a href={MOKS === 'MO' ? '/addCasePage3' : '/addKSCasePage3'} className='btn btn-dark mx-5 px-5'>Next</a>

                        </Col>

                    </Row>
                </Container>

            </main>

        </div>

    )
}

export default AddCasePage2
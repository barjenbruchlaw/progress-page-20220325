import React from 'react'
import PageNavBar from '../../components/PageNavBar'
import { Container, Row, Col, Form } from 'react-bootstrap'

const AddRPCasePage9 = () => {

    return (
        <div>

            <PageNavBar />

            <main className='page-main py-5'>
                <h1 className='text-center fw-bolder'>Add Case</h1>

                <Container>
                    <Row className="py-5">
                        <h4 className="fw-bold"> Please describe the incident requiring an emergency eviction below:</h4>
                    </Row>


                    <Form.Group className='mb-3' controlId='inputIncident information'>

                        <Row className='p-2'><Col xs={6}><Form.Label>Date of incident</Form.Label>
                            <Form.Control type='date' /></Col>
                            <Col xs={6}><Form.Label>Time of incident</Form.Label>
                                <Form.Control type='time' /></Col>
                        </Row>

                        <Row className='p-2'><Col><Form.Label>Describe the incident below</Form.Label>
                            <Form.Control as='textarea' rows={6} placeholder='Describe the incident here' /></Col></Row>

                    </Form.Group>


                    <Row>
                        <Col className='px-5'></Col>
                        <Col>
                            <a href='/addUDCasePage8' className='btn btn-dark mx-5 px-5'>Back</a><a href='/addUDCasePage10' className='btn btn-dark mx-5 px-5'>Next</a>

                        </Col>

                    </Row>


                </Container>

            </main>

        </div>

    )
}

export default AddRPCasePage9
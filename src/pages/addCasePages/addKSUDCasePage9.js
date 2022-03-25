import React from 'react'
import PageNavBar from '../../components/PageNavBar'
import { Container, Row, Col, Form } from 'react-bootstrap'

/* This page should only appear if the prior option 'Other lease violation' was checked */

const AddKSUDCasePage9 = () => {

    return (
        <div>

            <PageNavBar />

            <main className='page-main py-5'>
                <h1 className='text-center fw-bolder'>Add Case</h1>

                <Container>
                    <Row className="py-5">
                        <h4 className="fw-bold"> Please describe the lease violation(s) below:</h4>
                    </Row>


                    <Form.Group className='mb-3' controlId='inputIncident information'>

                        <Row className='p-2'><Col xs={6}><Form.Label>Date of violation or discovery of violation</Form.Label>
                            <Form.Control type='date' /></Col>
                            <Col xs={6}><Form.Label>Paragraph or section of lease violated</Form.Label>
                                <Form.Control /></Col>
                        </Row>

                        <Row className='p-2'><Col><Form.Label>Describe the lease violation below</Form.Label>
                            <Form.Control as='textarea' rows={3} placeholder='Describe the violation here' /></Col></Row>

                    </Form.Group>


                    <Row>
                        <Col className='px-5'></Col>
                        <Col>
                            <a href='/addKSUDCasePage8' className='btn btn-dark mx-5 px-5'>Back</a><a href='/addKSUDCasePage10' className='btn btn-dark mx-5 px-5'>Next</a> <br />

                        </Col>

                    </Row>


                </Container>

            </main>

        </div>

    )
}

export default AddKSUDCasePage9
import React from 'react'
import PageNavBar from '../../components/PageNavBar'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import '../../bootstrap.min.css'

const AddCasePage1 = () => {
    return (
        <div>

                <PageNavBar />

            <main className='page-main py-5'>
                <h1 className='text-center fw-bolder'>Add Case</h1>

                <Container>
                    <Row className="py-5">
                        <h4 className='fw-bold'> Choose the property manager and property owner</h4>
                    </Row>

                    <Row>
                        <Col className='p-5'>

                            {/* This should populate from the property manager assigned to the user; attorneys and paralegals can access all */}

                            <Form.Select aria-label="Select PM">
                                <option>Select Property Management Company</option>
                                <option value="1">ABC Company</option>
                                <option value="2">JKL Properties</option>
                                <option value="3">XYZ Asset Management</option>
                            </Form.Select>
                        </Col>
                        <Col className='p-5'>

                            {/* This should populate from the property owners associated with the property manager and assigned to the user; attorneys and paralegals can access all assigned to the manager */}

                            <Form.Select aria-label="Select Owner">
                                <option>Select Property Owner</option>
                                <option value="1">123 Main, LLC</option>
                                <option value="2">456 Main, LLC</option>
                                <option value="3">789 Main, LLC</option>
                            </Form.Select>

                        </Col>
                    </Row>

                    <Row>
                        <Col className='px-5'></Col>
                        <Col>
                            <Button variant="dark" disabled className='btn px-5'>Back</Button><a href='/addCasePage2' className='btn btn-dark mx-5 px-5'>Next</a>

                        </Col>

                    </Row>
                </Container>

            </main>

        </div>
    )
}

export default AddCasePage1

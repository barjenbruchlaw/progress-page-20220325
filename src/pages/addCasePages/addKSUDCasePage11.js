import React from 'react'
import PageNavBar from '../../components/PageNavBar'
import { Container, Row, Col, Card } from 'react-bootstrap'

const AddKSUDCasePage11 = () => {

    return (
        <div>

            <PageNavBar />

            <main className='page-main py-3'>
                <h1 className='text-center fw-bolder'>Add Case</h1>

                <Container>
                    <Row className="py-3">
                        <h4 className="fw-bold text-center"> Please review the information submitted:</h4>
                    </Row>

                    {/* This should all populate from the prior submissions */}

                    <Row className='justify-content-center'>
                        <Card bg='light' text='dark' border="light" className='p-1' style={{ width: '24rem' }}>
                            <Card.Header className='fw-bold'>Property Manager and Owner</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Property Manager: ABC Company <br />
                                    Property Owner: 123 Main, LLC <br />
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card bg='light' text='dark' border="light" className='p-1' style={{ width: '24rem' }}>
                            <Card.Header className='fw-bold'>Address</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Street Address: 1234 Main Street<br />
                                    Unit: 101<br />
                                    City: Kansas City<br />
                                    State: KS<br />
                                    ZIP: 64101<br />
                                    County: Wyandotte County, KS<br />
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card bg='light' text='dark' border="light" className='p-1' style={{ width: '24rem' }}>
                            <Card.Header className='fw-bold'>Reason for eviction</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Other lease violation <br />
                                    Notice given?: No <br />
                                    Date of notice: <br />
                                    Pre-litigation notice requested: Yes<br />
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Row>
                    <Row className='py-5 justify-content-center'>

                        <Card bg='light' text='dark' border="light" className='p-1' style={{ width: '24rem' }}>
                            <Card.Header className='fw-bold'>Resident names</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Resident 1: John L. Smith, Jr. <br />
                                    Resident 2: Mary A. Smith<br />
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card bg='light' text='dark' border="light" className='p-1' style={{ width: '24rem' }}>
                            <Card.Header className='fw-bold'>Lease violation</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Date of lease violation: February 26, 2022<br />
                                    Paragraph/section violated: Paragraph 13 <br /><br />
                                    Violation description: On February 26, 2022, an unauthorized dog in the unit bit a neighbor.<br />
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card bg='light' text='dark' border="light" className='p-1' style={{ width: '24rem' }}>
                            <Card.Header className='fw-bold'>Documents uploaded</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Lease: <a href='/'>Lease_1234_Main_101</a> <br />
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Row>

                    <Row className='py-3 justify-content-center'>

                        <Col className='text-end'>
                            <a href='/addKSUDCasePage10' className='btn btn-dark mx-5 px-5'>Back</a>
                        </Col>

                        <Col>
                            <a href='/' className='btn btn-primary mx-5 px-5'>Submit</a>
                        </Col>

                    </Row>

                </Container>

            </main>

        </div >

    )
}

export default AddKSUDCasePage11
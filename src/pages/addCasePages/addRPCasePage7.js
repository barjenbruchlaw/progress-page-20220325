import React from 'react'
import PageNavBar from '../../components/PageNavBar'
import { Container, Row, Col, Card } from 'react-bootstrap'

const AddRPCasePage7 = () => {

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
                                    State: MO<br />
                                    ZIP: 64110<br />
                                    County: Jackson County, MO<br />
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card bg='light' text='dark' border="light" className='p-1' style={{ width: '24rem' }}>
                            <Card.Header className='fw-bold'>Reason for eviction</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Non-payment of rent <br />
                                    Notice given?: Yes <br />
                                    Date of notice: March 8, 2022 <br />
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
                            <Card.Header className='fw-bold'>Balance owed</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Monthly rent amount: $1,000.00 <br />
                                    Date rent is due: March 1, 2022<br />
                                    Rent balance: $3,000.00 <br />
                                    Late fee balance: $300.00 <br />
                                    Utility balance: $225.00 <br />
                                    Balance date: March 11, 2022<br />
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card bg='light' text='dark' border="light" className='p-1' style={{ width: '24rem' }}>
                            <Card.Header className='fw-bold'>Documents uploaded</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Lease: <a href='/'>Lease_1234_Main_101</a> <br />
                                    Ledger: <a href='/'>Ledger_1234_101_2022-03-11</a> <br />
                                    Notice: <a href='/'>Notice_2022-03-07</a> <br />
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Row>

                    <Row className='py-3 justify-content-center'>
                    
                            <Col className='text-end'>                            
                            <a href='/addRPCasePage6' className='btn btn-dark mx-5 px-5'>Back</a>
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

export default AddRPCasePage7
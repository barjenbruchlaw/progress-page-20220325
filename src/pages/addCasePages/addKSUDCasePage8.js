import React from 'react'
import PageNavBar from '../../components/PageNavBar'
import { Container, Row, Col, Form } from 'react-bootstrap'

/* This page should only appear if the prior option 'Holdover tenant' was checked */

const AddKSUDCasePage8 = () => {



    return (
        <div>

            <PageNavBar />

            <main className='page-main py-5'>

                <h1 className='text-center fw-bolder'>Add Case</h1>

                <Container>
                    <Row className="py-5 text-center">
                        <h2> What is the monthly rent on this unit:</h2>
                    </Row>

                    <Row className='pb-5'>

                        <Col></Col>

                        <Col>

                            <Form className='pb-3 text-center'> <h3>

                                <Form.Control type='currency' placeholder='Enter Monthly Rent Amount' />{/* Input field should be in dollar currency format */}

                            </h3></Form>

                        </Col>

                        <Col></Col>

                    </Row>

                    <Row>
                        <Col className='px-5'></Col>
                        <Col>
                            <a href='/addKSUDCasePage7' className='btn btn-dark mx-5 px-5'>Back</a><a href='/addKSUDCasePage9' className='btn btn-dark mx-5 px-5'>Next</a>

                        </Col>

                    </Row>
                </Container>

            </main>

        </div >
    )

}


export default AddKSUDCasePage8
import React, { useState } from 'react'
import PageNavBar from '../../components/PageNavBar'
import { Container, Row, Col, Form } from 'react-bootstrap'

{/* This page should only appear if the prior option 'Squatters / No agreement with tenants' was checked */}

const AddKSUDCasePage6 = () => {

  const [radio, setRadio] = useState("Y")

  return (
    <div>

    <PageNavBar />

        <main className='page-main py-5'>

            <h1 className='text-center fw-bolder'>Add Case</h1>

            <Container>
                <Row className="py-5 text-center">
                    <h2> Do you know the names of any of the current resident(s):</h2>
                </Row>

                <Row>

                    <Form className='pb-3 text-center'> <h3>

                        <Form.Check inline className='m-5' label='Yes' type='radio' checked={radio === 'Y'} value='Y' onChange={(e) => { setRadio(e.target.value) }} />
                        <Form.Check inline className='m-5' label='No' type='radio' checked={radio === 'N'} value='N' onChange={(e) => { setRadio(e.target.value) }} />

                    </h3></Form>

                </Row>

                <Row>
                    <Col className='px-5'></Col>
                    <Col>
                        <a href='/addKSUDCasePage5' className='btn btn-dark mx-5 px-5'>Back</a><a href='/addKSUDCasePage7' className='btn btn-dark mx-5 px-5'>Next</a>

                    </Col>

                </Row>
            </Container>

        </main>

    </div >
)

}


export default AddKSUDCasePage6
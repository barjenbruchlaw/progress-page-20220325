import React, { useState } from 'react'
import PageNavBar from '../../components/PageNavBar'
import { Container, Row, Col, Form } from 'react-bootstrap'

{/* This page should only appear if the prior question 'Have you provided notice to the resident?' was checked no */}

const AddUDCasePage4 = () => {

  const [radio, setRadio] = useState("Y")

  return (
    <div>

    <PageNavBar />

        <main className='page-main py-5'>

            <h1 className='text-center fw-bolder'>Add Case</h1>

            <Container>
                <Row className="pt-5 text-center">
                    <h2> Do you need our office to provide a notice to the resident(s):</h2>
                </Row>

                <Row>

                    <Form className='p-3 text-center'> <h3>

                        <Form.Check inline className='m-5' label='Yes' type='radio' checked={radio === 'Y'} value='Y' onChange={(e) => { setRadio(e.target.value) }} />
                        <Form.Check inline className='m-5' label='No' type='radio' checked={radio === 'N'} value='N' onChange={(e) => { setRadio(e.target.value) }} />

                    </h3></Form>

                </Row>

                <Row><h3 className='text-center'>Our office charges $100 to provide a pre-litigation notice to the resident.<br /><br /></h3></Row>

                <Row>
                    <Col className='px-5'></Col>
                    <Col>
                        <a href='/addCasePage3' className='btn btn-dark mx-5 px-5'>Back</a><a href='/addUDCasePage5' className='btn btn-dark mx-5 px-5'>Next</a>

                    </Col>

                </Row>
            </Container>

        </main>

    </div >
)

}


export default AddUDCasePage4
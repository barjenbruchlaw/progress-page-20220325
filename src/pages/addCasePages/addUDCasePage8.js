import React, { useState } from 'react'
import PageNavBar from '../../components/PageNavBar'
import { Container, Row, Col, Form } from 'react-bootstrap'

{/* This page should only appear if one or more of the page 5 options 'Violence/credible threat of violence against other residents or staff, 
More than one year worth of rent in damage to the unit, Credible evidence of drug sales in unit, Illegal drugs found in unit, 
Allowing banned persons on the property' was checked */}

const AddUDCasePage8 = () => {

  const [radio, setRadio] = useState("Y")

  return (
    <div>

    <PageNavBar />

        <main className='page-main py-5'>

            <h1 className='text-center fw-bolder'>Add Case</h1>

            <Container>
                <Row className="py-5 text-center">
                    <h2>    Are you requesting an emergency eviction? <br /><br />
                            <strong>NOTE: You will have to prove each and every incident, <br />and this may increase the cost of the eviction if the matter is contested.</strong> <br /><br />
                            An emergency eviction is expedited, and eliminates <br /> the ten day waiting period after a judgment.
                    </h2>
                </Row>

                <Row>

                    <Form className='p-3 text-center'> <h3>

                        <Form.Check inline className='m-5' label='Yes' type='radio' checked={radio === 'Y'} value='Y' onChange={(e) => { setRadio(e.target.value) }} />
                        <Form.Check inline className='m-5' label='No' type='radio' checked={radio === 'N'} value='N' onChange={(e) => { setRadio(e.target.value) }} />

                    </h3></Form>

                </Row>

                <Row>
                    <Col className='px-5'></Col>
                    <Col>
                        <a href='/addUDCasePage7' className='btn btn-dark mx-5 px-5'>Back</a><a href='/addUDCasePage9' className='btn btn-dark mx-5 px-5'>Next</a>

                    </Col>

                </Row>
            </Container>

        </main>

    </div >
)

}


export default AddUDCasePage8
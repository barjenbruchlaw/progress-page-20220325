import React, { useState } from 'react'
import PageNavBar from '../../components/PageNavBar'
import { Container, Row, Col, Form } from 'react-bootstrap'

const AddUDCasePage5 = () => {

  return (
    <div>

    <PageNavBar />

        <main className='page-main py-5'>

            <h1 className='text-center fw-bolder'>Add Case</h1>

            <Container>
                <Row className="py-5 ms-5">
                    <h2> What is/are the reason(s) for filing this eviction:</h2>
                </Row>

                <Row>

                    <Form className='ms-5'> <h4>

                        <Form.Check inline className='ms-5 py-1' label='Squatters / No agreement with tenants' type='checkbox' value='isSquatter' /> <br />
                        <Form.Check inline className='ms-5 py-1' label='Holdover tenant' type='checkbox' value='isHoldover' /> <br />
                        <Form.Check inline className='ms-5 py-1' label='Violence/credible threat of violence against other residents or staff' type='checkbox' value='isViolence' /> <br />
                        <Form.Check inline className='ms-5 py-1' label='More than one year worth of rent in damage to the unit' type='checkbox' value='isMajorDamage' /> <br />
                        <Form.Check inline className='ms-5 py-1' label='Credible evidence of drug sales in unit' type='checkbox' value='isDrugSales' /> <br />
                        <Form.Check inline className='ms-5 py-1' label='Illegal drugs found in unit' type='checkbox' value='isDrugPossession' /> <br />
                        <Form.Check inline className='ms-5 py-1' label='Allowing banned persons on the property' type='checkbox' value='isAllowsBanned' /> <br />
                        <Form.Check inline className='ms-5 py-1' label='Other lease violations (e.g., unauthorized residents or pets, housekeeping violations)' type='checkbox' value='isLeaseViolation' /> <br />

                    </h4></Form>

                </Row>

                <Row className='py-5'>
                    <Col className='px-5'></Col>
                    <Col>
                        <a href='/addUDCasePage4' className='btn btn-dark mx-5 px-5'>Back</a><a href='/addUDCasePage6' className='btn btn-dark mx-5 px-5'>Next</a>

                    </Col>

                </Row>
            </Container>

        </main>

    </div >
)

}


export default AddUDCasePage5
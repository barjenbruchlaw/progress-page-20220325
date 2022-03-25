import React, { useState } from 'react'
import { Container, Row, Col, Form, Table, Modal, Button } from 'react-bootstrap'

const JurisdictionMaintenance = () => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>

            <h2>Jurisdictions:</h2>

            <Table striped bordered hover className='my-5'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>County name</th>
                        <th>Location</th>
                        <th>Address</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <th>Jackson</th>
                        <th>Kansas City</th>
                        <th>415 E. 12th Street, Kansas City, MO 64106</th>
                        <th><Button onClick={handleShow}>Edit</Button></th>
                    </tr>
                    <tr>
                        <th>2</th>
                        <th>Jackson</th>
                        <th>Independence</th>
                        <th>308 W. Kansas Avenue, Independence, MO 64050</th>
                        <th><Button disabled>Edit</Button></th>
                    </tr>
                    <tr>
                        <th>3</th>
                        <th>Johnson</th>
                        <th></th>
                        <th>150 W. Santa Fe Street, Olathe, KS 66061</th>
                        <th><Button disabled>Edit</Button></th>
                    </tr>

                </tbody>
            </Table>

            <div className='text-end p-5 m-5'>
                <Button disabled>Add</Button>
            </div>
                    
            <Modal show={show} onHide={handleClose} size='xl'>
                <Modal.Header className='bg-light' closeButton>
                    <Modal.Title>Edit Jurisdiction</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Container>
                            <Row className='pt-3'>
                                <Col>
                                    <Form.Label>Jurisdiction name:</Form.Label>
                                    <Form.Control value='Jackson' />
                                </Col>
                                <Col>
                                    <Form.Label>Location name:</Form.Label>
                                    <Form.Control value='Kansas City' />
                                </Col>
                            </Row>
                            <Row className='pt-3'>
                                <Col>
                                    <Form.Label>Street Address:</Form.Label>
                                    <Form.Control value='415 E. 12th Street' />
                                </Col>
                            </Row>
                            <Row className='pt-3'>
                                <Col>
                                    <Form.Label>City:</Form.Label>
                                    <Form.Control value='Kansas City' />
                                </Col>
                                <Col xs={2}>
                                    <Form.Label>State:</Form.Label>
                                    <Form.Control value='Missouri' />
                                </Col>
                                <Col>
                                    <Form.Label>ZIP:</Form.Label>
                                    <Form.Control value='64106' />
                                </Col>
                            </Row>
                        </Container>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default JurisdictionMaintenance
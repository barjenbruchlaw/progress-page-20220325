import React, { useState } from 'react'
import { Container, Row, Col, Form, Table, Modal, Button } from 'react-bootstrap'

const JudgeMaintenance = () => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>

            <h2>Judges:</h2>

            <Table striped bordered hover className='my-5'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Judge name</th>
                        <th>Jurisdiction</th>
                        <th>Division</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <th>Mary F. Weir</th>
                        <th>Jackson County, MO</th>
                        <th>31</th>
                        <th>415 E. 12th Street, Floor 7M, Kansas City, MO 64106</th>
                        <th>(816) 881-3542</th>
                        <th><Button onClick={handleShow}>Edit</Button></th>
                    </tr>
                    <tr>
                        <th>2</th>
                        <th>Kyndra J. Stockdale</th>
                        <th>Jackson County, MO</th>
                        <th>32</th>
                        <th>308 W. Kansas Avenue, Floor 3, Independence, MO 64050</th>
                        <th>(816) 881-4514</th>
                        <th><Button disabled>Edit</Button></th>
                    </tr>
                    <tr>
                        <th>3</th>
                        <th>R. Travis Willingham</th>
                        <th>Jackson County, MO</th>
                        <th>26</th>
                        <th>415 E. 12th Street, Floor 7, Kansas City, MO 64106</th>
                        <th>(816) 881-3686</th>
                        <th><Button disabled>Edit</Button></th>
                    </tr>

                </tbody>
            </Table>

            <div className='text-end p-5 m-5'>
                <Button disabled>Add</Button>
            </div>
                    
            <Modal show={show} onHide={handleClose} size='xl'>
                <Modal.Header className='bg-light' closeButton>
                    <Modal.Title>Edit Judge</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Container>
                            <Row className='pt-3 ms-1'>Judge name:</Row>
                            <Row className='pt-3'>
                                <Col>
                                    <Form.Control placeholder='First Name' value='Mary' />
                                </Col>
                                <Col xs={2}>
                                    <Form.Control placeholder='Mid Init' value='F' />
                                </Col>
                                <Col>
                                    <Form.Control placeholder='Last Name' value='Weir' />
                                </Col>
                                <Col xs={2}>
                                    <Form.Control placeholder='Suffix' />
                                </Col>
                            </Row>
                            <Row className='pt-3'>
                                <Col xs={6}>
                                    <Form.Label>Jurisdiction</Form.Label>
                                    <Form.Select>
                                        <option selected>Jackson County (Kansas City), MO</option>
                                        <option>Jackson County (Independence), MO</option>
                                        <option>Johnson County, KS</option>
                                    </Form.Select>
                                </Col>
                                <Col>
                                    <Form.Label>Division</Form.Label>
                                    <Form.Control placeholder='Division #' value='31' />
                                </Col>
                                <Col>
                                    <Form.Label>Floor</Form.Label>
                                    <Form.Control placeholder='Floor #' value='7M' />
                                </Col>
                            </Row>
                            <Row className='pt-3'>
                                <Col xs={4}>
                                    <Form.Label>Phone:</Form.Label>
                                    <Form.Control value='(816) 881-3542' />
                                </Col>
                            </Row>
                            <Row className='pt-3'>
                                <Col xs={4}>
                                    <br />
                                    <Form.Check type='checkbox' id='judgeEnvelopes' label='Judge wants envelopes?' checked='true' />
                                </Col>
                                <Col xs={4}>
                                    <Form.Label>Number of copies:</Form.Label>
                                    <Form.Control placeholder='# of copies' value='2' />
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

export default JudgeMaintenance
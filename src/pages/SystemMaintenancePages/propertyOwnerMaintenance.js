import React, { useState } from 'react'
import { Container, Row, Col, Form, Table, Modal, Button, Popover, OverlayTrigger } from 'react-bootstrap'

const userPopoverJSmith = (

    <Popover id="user-information">
        <Popover.Header as="h4">John L. Smith</Popover.Header>
        <Popover.Body>
            Email: <a href='mailto: jsmith@abccompany.com'>jsmith@abccompany.com</a> <br />
            Phone: (816) 555-1234
        </Popover.Body>
    </Popover>

)

const userPopoverJJonas = (

    <Popover id="user-information">
        <Popover.Header as="h4">James J. Jonas</Popover.Header>
        <Popover.Body>
            Email: <a href='mailto: jjonas@abccompany.com'>jjonas@abccompany.com</a> <br />
            Phone: (816) 555-1234
        </Popover.Body>
    </Popover>

)

const userPopoverMSmith = (

    <Popover id="user-information">
        <Popover.Header as="h4">Mary A. Smith</Popover.Header>
        <Popover.Body>
            Email: <a href='mailto: msmith@jklproperties.com'>msmith@jklproperties.com</a> <br />
            Phone: (816) 555-5678
        </Popover.Body>
    </Popover>

)

const userPopoverLBaker = (

    <Popover id="user-information">
        <Popover.Header as="h4">Larry K. Baker</Popover.Header>
        <Popover.Body>
            Email: <a href='mailto: lbaker@xyzpropertymgmt.com'>lbaker@xyzpropertymgmt.com</a> <br />
            Phone: (816) 555-7890
        </Popover.Body>
    </Popover>

)

const PropertyOwnerMaintenance = () => {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>

            <h2>Property Owners:</h2>

            <Table striped bordered hover className='my-5'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Business legal name</th>
                        <th>Business DBA name</th>
                        <th>Property Manager</th>
                        <th>Address</th>
                        <th>Phone number</th>
                        <th>Associated Users</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <th>123 Main, LLC</th>
                        <th>The Drake</th>
                        <th>ABC Company</th>
                        <th>123 Main Street, Kansas City, MO 64000</th>
                        <th>(816) 555-1234</th>
                        <th>
                            <OverlayTrigger trigger='click' rootClose placement='left' overlay={userPopoverJSmith}><a href='#userInfo'>John L. Smith</a></OverlayTrigger> <br />
                            <OverlayTrigger trigger='click' rootClose placement='left' overlay={userPopoverJJonas}><a href='#userInfo'>James J. Jonas</a></OverlayTrigger>
                        </th>
                        <th><Button onClick={handleShow}>Edit</Button></th>
                    </tr>
                    <tr>
                        <th>2</th>
                        <th>456 Main, LLC</th>
                        <th>The Mallard</th>
                        <th>JKL Properties</th>
                        <th>567 Main Street, Kansas City, MO 64000</th>
                        <th>(816) 555-5678</th>
                        <th><OverlayTrigger trigger='click' rootClose placement='left' overlay={userPopoverMSmith}><a href='#userInfo'>Mary A. Smith</a></OverlayTrigger></th>
                        <th><Button disabled>Edit</Button></th>
                    </tr>
                    <tr>
                        <th>3</th>
                        <th>789 Main, LLC</th>
                        <th>The Goose</th>
                        <th>XYZ Property Management</th>
                        <th>789 Main Street, Kansas City, MO 64000</th>
                        <th>(816) 555-7890</th>
                        <th><OverlayTrigger trigger='click' rootClose placement='left' overlay={userPopoverLBaker}><a href='#userInfo'>Larry K. Baker</a></OverlayTrigger></th>
                        <th><Button disabled>Edit</Button></th>
                    </tr>

                </tbody>
            </Table>

            <div className='text-end p-5 m-5'>
                <Button disabled>Add</Button>
            </div>

            <Modal show={show} onHide={handleClose} size='xl'>
                <Modal.Header className='bg-light' closeButton>
                    <Modal.Title>Edit Property Owner</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Container>
                            <Row className='pt-3'>
                                <Col>
                                    <Form.Label>Property Owner Legal Name:</Form.Label>
                                    <Form.Control value='123 Main, LLC' />
                                </Col>
                                <Col>
                                    <Form.Label>Property Owner DBA Name:</Form.Label>
                                    <Form.Control value='The Drake' />
                                </Col>
                                <Col>
                                    <Form.Label>Property Manager:</Form.Label>
                                    <Form.Control value='ABC Company' />
                                </Col>
                            </Row>
                            <Row className='pt-3'>
                                <Col>
                                    <Form.Label>Street Address:</Form.Label>
                                    <Form.Control value='123 Main Street' />
                                </Col>
                                <Col>
                                    <Form.Label>Unit:</Form.Label>
                                    <Form.Control />
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
                                    <Form.Control value='64000' />
                                </Col>
                            </Row>
                            <Row className='pt-3'>
                                <Col>
                                    <Form.Label>Phone number:</Form.Label>
                                    <Form.Control value='(816) 555-1234' />
                                </Col>
                                <Col />
                                <Col>
                                    <Form.Label>Select Associated Users:</Form.Label>
                                    <Form.Check type='checkbox' id='user1' checked='true' label='John L. Smith'/>
                                    <Form.Check type='checkbox' id='user1' label='Mary A. Jones'/>
                                    <Form.Check type='checkbox' id='user1' checked='true' label='James J. Jonas'/>
                                </Col>
                                <Col />
                            </Row>
                            <Row className='pt-3'>
                                <Col>
                                    <Form.Label>Caption Language</Form.Label>
                                    <Form.Control value='ABC Company, as agent for 123 Main, LLC'/>
                                </Col>
                                <Col>
                                    <Form.Label>Paragraph One Language</Form.Label>
                                    <Form.Control value='ABC Company, as agent for 123 Main, LLC' />
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

export default PropertyOwnerMaintenance
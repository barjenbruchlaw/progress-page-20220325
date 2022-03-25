import React, { useState } from 'react'
import PageNavBar from '../../components/PageNavBar'
import { Container, Row, Col, Form } from 'react-bootstrap'

const AddKSRPCasePage5 = () => {

    const [formValues, setFormValues] = useState([{ firstName: "", lastName : "", mi: "", suffix: ""}])
    
    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
      }
    
    let addFormFields = () => {
        setFormValues([...formValues, { name: "", email: "" }])
      }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    
    return (

        <div>

        <PageNavBar />

    <main className='page-main py-5'>
                <h1 className='pb-5 text-center fw-bolder'>Add Case</h1>

                <Container>
                <form>
                    {formValues.map((element, index) => (
                    <div className="form-inline" key={index}>
                        <Row className='py-3'>
                        <Col xs={1}><label className='fw-bold'>Resident:  {/* Can we number the residents as we add entries? */} </label></Col>
                        <Col xs={4}><Form.Control placeholder='First Name' name="firstName" value={element.name || ""} onChange={e => handleChange(index, e)} /></Col>
                        <Col xs={1}><Form.Control placeholder='Mid Init' name="mi" value={element.name || ""} onChange={e => handleChange(index, e)} /></Col>
                        <Col xs={4}><Form.Control placeholder='Last Name' name="lastName" value={element.name || ""} onChange={e => handleChange(index, e)} /></Col>
                        <Col xs={1}><Form.Control placeholder='Suffix' name="suffix" value={element.name || ""} onChange={e => handleChange(index, e)} /></Col>
                        {
                        index ? 
                        <Col xs={1}><button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button></Col> 
                        : null
                        }
                        </Row></div>
                    ))}
                    <div className="button-section">
                        <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
                    </div>
                </form>

                    <Row className='py-5'>
                        
                        <dir className='fs-5 text-center'>Please make sure that the only persons on this list are signing co-tenants.  Do not put minor residents on this list!</dir>

                    </Row>

                    <Row>
                        <Col className='px-5'></Col>
                        <Col>
                            <a href='/addKSRPCasePage4' className='btn btn-dark mx-5 px-5'>Back</a><a href='/addKSRPCasePage6' className='btn btn-dark mx-5 px-5'>Next</a>

                        </Col>

                    </Row>
                </Container>

            </main>

        </div>

    )
}

export default AddKSRPCasePage5
import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import PageNavBar from '../../components/PageNavBar'
import PropertyManagerMaintenance from './propertyManagerMaintenance'
import PropertyOwnerMaintenance from './propertyOwnerMaintenance'
import JurisdictionMaintenance from './jurisdictionMaintenance'
import JudgeMaintenance from './judgeMaintenance'
import '../../bootstrap.min.css'

const systemMainPage = () => {
    return (
        <div>

            <PageNavBar />

            <main className='py-5 page-main'>

                <Tabs className='border-primary text-dark TabBar nav-justified'>

                    <Tab eventKey='pm' title='Property Managers' className='p-3 my-5'><PropertyManagerMaintenance /></Tab>
                    <Tab eventKey='owner' title='Property Owners' className='p-3 my-5'><PropertyOwnerMaintenance /></Tab>
                    <Tab eventKey='user' title='Users' className='p-3 my-5' disabled>Users:</Tab>
                    <Tab eventKey='jurisdiction' title='Jurisdictions' className='p-3 my-5'><JurisdictionMaintenance /></Tab>
                    <Tab eventKey='judge' title='Judges' className='p-3 my-5'><JudgeMaintenance /></Tab>

                </Tabs>
            </main>

        </div>
    )
}

export default systemMainPage
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import AddCasePage1 from './pages/addCasePages/addCasePage1'
import AddCasePage2 from './pages/addCasePages/addCasePage2'
import AddCasePage3 from './pages/addCasePages/addCasePage3'
import AddKSCasePage3 from './pages/addCasePages/addKSCasePage3'
import AddKSRPCasePage4 from './pages/addCasePages/addKSRPCasePage4'
import AddKSRPCasePage5 from './pages/addCasePages/addKSRPCasePage5'
import AddKSRPCasePage6 from './pages/addCasePages/addKSRPCasePage6'
import AddKSRPCasePage7 from './pages/addCasePages/addKSRPCasePage7'
import AddKSRPCasePage8 from './pages/addCasePages/addKSRPCasePage8'
import AddKSUDCasePage4 from './pages/addCasePages/addKSUDCasePage4'
import AddKSUDCasePage5 from './pages/addCasePages/addKSUDCasePage5'
import AddKSUDCasePage6 from './pages/addCasePages/addKSUDCasePage6'
import AddKSUDCasePage7 from './pages/addCasePages/addKSUDCasePage7'
import AddKSUDCasePage8 from './pages/addCasePages/addKSUDCasePage8'
import AddKSUDCasePage9 from './pages/addCasePages/addKSUDCasePage9'
import AddKSUDCasePage10 from './pages/addCasePages/addKSUDCasePage10'
import AddKSUDCasePage11 from './pages/addCasePages/addKSUDCasePage11'
import AddRPCasePage4 from './pages/addCasePages/addRPCasePage4'
import AddRPCasePage5 from './pages/addCasePages/addRPCasePage5'
import AddRPCasePage6 from './pages/addCasePages/addRPCasePage6'
import AddRPCasePage7 from './pages/addCasePages/addRPCasePage7'
import AddUDCasePage4 from './pages/addCasePages/addUDCasePage4'
import AddUDCasePage5 from './pages/addCasePages/addUDCasePage5'
import AddUDCasePage6 from './pages/addCasePages/addUDCasePage6'
import AddUDCasePage7 from './pages/addCasePages/addUDCasePage7'
import AddUDCasePage8 from './pages/addCasePages/addUDCasePage8'
import AddUDCasePage9 from './pages/addCasePages/addUDCasePage9'
import AddUDCasePage10 from './pages/addCasePages/addUDCasePage10'
import AddUDCasePage11 from './pages/addCasePages/addUDCasePage11'
import AddUDCasePage12 from './pages/addCasePages/addUDCasePage12'
import AddUDCasePage13 from './pages/addCasePages/addUDCasePage13'
import SystemMainPage from './pages/SystemMaintenancePages/systemMainPage'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='addCasePage1' element={<AddCasePage1 />} />
        <Route path='addCasePage2' element={<AddCasePage2 />} />
        <Route path='addCasePage3' element={<AddCasePage3 />} />
        <Route path='addKSCasePage3' element={<AddKSCasePage3 />} />
        <Route path='AddKSRPCasePage4' element={<AddKSRPCasePage4 />} />
        <Route path='AddKSRPCasePage5' element={<AddKSRPCasePage5 />} />
        <Route path='AddKSRPCasePage6' element={<AddKSRPCasePage6 />} />
        <Route path='AddKSRPCasePage7' element={<AddKSRPCasePage7 />} />
        <Route path='AddKSRPCasePage8' element={<AddKSRPCasePage8 />} />
        <Route path='AddKSUDCasePage4' element={<AddKSUDCasePage4 />} />
        <Route path='AddKSUDCasePage5' element={<AddKSUDCasePage5 />} />
        <Route path='AddKSUDCasePage6' element={<AddKSUDCasePage6 />} />
        <Route path='AddKSUDCasePage7' element={<AddKSUDCasePage7 />} />
        <Route path='AddKSUDCasePage8' element={<AddKSUDCasePage8 />} />
        <Route path='AddKSUDCasePage9' element={<AddKSUDCasePage9 />} />
        <Route path='AddKSUDCasePage10' element={<AddKSUDCasePage10 />} />
        <Route path='AddKSUDCasePage11' element={<AddKSUDCasePage11 />} />
        <Route path='addRPCasePage4' element={<AddRPCasePage4 />} />
        <Route path='addRPCasePage5' element={<AddRPCasePage5 />} />
        <Route path='addRPCasePage6' element={<AddRPCasePage6 />} />
        <Route path='addRPCasePage7' element={<AddRPCasePage7 />} />
        <Route path='addUDCasePage4' element={<AddUDCasePage4 />} />
        <Route path='addUDCasePage5' element={<AddUDCasePage5 />} />
        <Route path='addUDCasePage6' element={<AddUDCasePage6 />} />
        <Route path='addUDCasePage7' element={<AddUDCasePage7 />} />
        <Route path='addUDCasePage8' element={<AddUDCasePage8 />} />
        <Route path='addUDCasePage9' element={<AddUDCasePage9 />} />
        <Route path='addUDCasePage10' element={<AddUDCasePage10 />} />
        <Route path='addUDCasePage11' element={<AddUDCasePage11 />} />
        <Route path='addUDCasePage12' element={<AddUDCasePage12 />} />
        <Route path='addUDCasePage13' element={<AddUDCasePage13 />} />
        <Route path='system' element={<SystemMainPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

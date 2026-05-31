import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigatePatients=useNavigate()
  return (
    <div>
        <h1>Hospital Management System</h1>
        <p>Welcome to our hospital, where patient care and well-being are our top priorities. We provide high-quality healthcare services with a team of experienced doctors, skilled nurses, and modern medical facilities. Our hospital offers comprehensive treatment, emergency care, diagnostic services, and specialized medical support to ensure the best outcomes for our patients. We are committed to delivering compassionate, affordable, and reliable healthcare in a safe and comfortable environment.
        </p>
        <button onClick={()=>navigatePatients('/patients')}>patient datails</button>
    </div>
  )
}

export default Home
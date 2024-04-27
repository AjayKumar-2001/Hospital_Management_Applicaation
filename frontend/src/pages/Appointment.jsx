import React from 'react'
import AppointmentForm from '../components/AppointmentForm'
import Hero from '../components/Hero'
const Appointment = () => {
  return (
    <>
      <Hero
        title={"Shedule Your Appointment | ZeeCare Medical Institue"}
        imageUrl={"/signin.png"}
      />
      <AppointmentForm/>
      <p>"Schedule your appointment at Zeecare Medical Institute today. Our expert team is ready to provide personalized care tailored to your needs. Experience excellence in healthcare with state-of-the-art facilities and compassionate professionals. Book now for a healthier tomorrow."</p>
    </>
  )
}

export default Appointment

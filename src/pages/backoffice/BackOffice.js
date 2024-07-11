import React from 'react'
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import ControlSidebar from '../../components/ControlSidebar';

function BackOffice(props) {
  return (
    <>
      <div className='wrapper'>
          <Navbar />
          <Sidebar />
          <div className='container-wrapper p-2 content-wrapper'>
              {props.children}
          </div>
          <Footer />
          <ControlSidebar />
      </div>


      
    </>
  )
}

export default BackOffice
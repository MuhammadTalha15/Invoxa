import React from 'react'
import '../styles/controlPanel.scss'

const ControlPanel = ({ onClick }) => {
  return (
    <>
        <section className="panel">
            <button className='download-btn' onClick={onClick}>Download Invoice</button>
        </section>
    </>
  )
}

export default ControlPanel

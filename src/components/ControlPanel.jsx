import React from 'react'
import '../styles/controlPanel.scss'

const ControlPanel = ({ onClick }) => {
  return (
    <>
        <section className="panel">
            <button className='download-btn' onClick={onClick}>Download Invoice</button>
            <select name="" id="Download/Print">
                <option value="Download">Download</option>
                <option value="Print">Print</option>
            </select>
        </section>
    </>
  )
}

export default ControlPanel

import React from 'react'

export default function DefaultPage(props) {
  return (
    <div>
        <div className='header heading'>
            <div className='d-flex justify-content-between'>
                <h2>Car Rental</h2>
            </div>
            </div>
            <div className='content'>
{props.children}

        </div>
    </div>
  )
}

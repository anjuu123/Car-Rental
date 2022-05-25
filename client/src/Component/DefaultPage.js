import React from 'react'

export default function DefaultPage(props) {
  return (
    <div>
        <div className='header'>
            <div className='d-flex justify-content-between'>
                <h2>Book Ridez</h2>
            </div>
            <div className='content'>
{props.children}

            </div>
        </div>
    </div>
  )
}

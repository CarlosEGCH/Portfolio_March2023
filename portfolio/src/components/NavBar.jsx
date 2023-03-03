import React from 'react'

function NavBar() {
  return (
    <div className='bg-background flex flex-row text-white font-sans justify-between h-16 items-center px-28 py-10'>
        <p>Logo</p>
        <div className='flex gap-6 grow justify-center'>
            <a>Home</a>
            <a>About</a>
            <a>Services</a>
            <a>Project</a>
            <a>Pricing</a>
        </div>
        <div className='flex flex-row'>
            <div>
                Contact
            </div>
            <p>|</p>
            <div className='flex flex-row'>
                <div>Icon1</div>
                <div>Icon1</div>
                <div>Icon1</div>
            </div>
        </div>
    </div>
  )
}

export default NavBar
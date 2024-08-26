import React from 'react'
import Navbar from './Navbar'
import { Head } from '@inertiajs/react'

function Layout({title, children}) {
  return (
    <div>
      <Head ><title>{title}</title></Head>
        <Navbar/>
        Layout
        
        {children}
        </div>
       
  )
}

export default Layout
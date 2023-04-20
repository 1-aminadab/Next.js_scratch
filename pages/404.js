import React from 'react'
import Link from 'next/link'
function PageNotFound() {
  return (
    <div>
        <h1>PageNotFound</h1>
        <h3>Check to see you are in the correct page</h3>
        <Link href="/">Click here to go home</Link>        
    </div>
  )
}

export default PageNotFound
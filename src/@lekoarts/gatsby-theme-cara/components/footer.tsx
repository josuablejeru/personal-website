import React from 'react'
import { Box, Divider, Link } from 'theme-ui'

const Footer = () => {

  return (
    <Box as="footer" variant='footer'>
      <Divider />
      <Link href='/legal-notice'>Legal Notice</Link>
      <p>
        Copyright &copy; {new Date().getFullYear()} Josua Blejeru. All rights reserved.
      </p>
    </Box>
  )
}

export default Footer

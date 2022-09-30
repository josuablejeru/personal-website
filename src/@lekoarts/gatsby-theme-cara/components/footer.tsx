import React from 'react'
import { Box, Divider, Link, Flex } from 'theme-ui'

const Footer = () => {

  return (
    <Box as="footer" variant='footer'>
      <Divider />
      <Flex sx={{flexDirection: 'column', alignItems: 'center'}}>
        <Link href='/'>Home</Link>
        <Link href='/legal-notice'>Legal Notice</Link>
      </Flex>
      <p>
        Copyright &copy; {new Date().getFullYear()} Josua Blejeru. All rights reserved.
      </p>
    </Box>
  )
}

export default Footer

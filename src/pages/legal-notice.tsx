import React from 'react'
import Layout from '@lekoarts/gatsby-theme-cara/src/components/layout'
import Footer from '@lekoarts/gatsby-theme-cara/src/components/footer'
import { Flex } from 'theme-ui'

const data = {
  name: 'Josua Blejeru',
  address: `
  Voltastraße 1.
  90459 Nürnberg
  `,
  phoneNumber: '+4915117941515',
  email: 'josua@blejeru.com',
  taxId: 'Ust-IdNr: DE347565818',
  date: '30.09.2022'
}

const Impressum = () => {

  return (
    <Layout>
      <Flex sx={{flexDirection: 'column', alignItems: 'center'}}>
        <h1>Impressum</h1>
          {Object.values(data).map(entry => (<p>{entry}</p>))}
        <Footer />
      </Flex>
    </Layout>
  )
}

export default Impressum

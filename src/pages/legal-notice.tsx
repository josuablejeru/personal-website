import React from 'react'
import Layout from '@lekoarts/gatsby-theme-cara/src/components/layout'
import Footer from '@lekoarts/gatsby-theme-cara/src/components/footer'

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
      <h1 className="text-3xl font-bold underline m-3">Impressum</h1>
      <ul>
        {Object.values(data).map(entry => (<li className='m-3 '>{entry}</li>))}
      </ul>
      <Footer />
    </Layout>
  )
}

export default Impressum

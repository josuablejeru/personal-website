import React from 'react'
import Cara from '@lekoarts/gatsby-theme-cara/src/templates/cara'

import CookieConsent from 'react-cookie-consent';


const CaraExtended = () => {

  return (
    <>
      <Cara />
      <CookieConsent
          location="bottom"
          buttonText="Accept"
          declineButtonText="Decline"
          cookieName="gatsby-gdpr-google-analytics">
          This website uses cookies to enhance the user experience.
        </CookieConsent>
    </>
  )
}


export default CaraExtended

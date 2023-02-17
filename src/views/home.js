import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Senior Web Producer</title>
        <meta property="og:title" content="Senior Web Producer" />
      </Helmet>
    </div>
  )
}

export default Home

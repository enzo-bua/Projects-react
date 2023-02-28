import React from 'react'
import './index.css'
import { Helmet } from 'react-helmet'

export const Layout = ({ children, title, subtitle }) => {
  return (
    <React.Fragment>
      <Helmet>
        {title && <title>{title} | Petgram 🐶</title>}
        {subtitle && <meta name="description" content={subtitle} />}      </Helmet>

        <div>
          {title && <h1>{title}</h1>}
          {subtitle && <h1>{subtitle}</h1>}
          {children}
        </div>
    </React.Fragment>
  )
}

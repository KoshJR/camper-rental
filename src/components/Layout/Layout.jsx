import React from 'react'
import css from "./Layout.module.css"
import Navigation from '../Navigation/Navigation'

const Layout = ({children}) => {
  return (
      <div className={css.container}>
          <header>
              <div>
                  <Navigation/>
              </div>
          </header>
          <main>{children}</main>
    </div>
  )
}

export default Layout
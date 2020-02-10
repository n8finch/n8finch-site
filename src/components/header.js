import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from './menu'
import SocialNav from './social-nav'

import ThemeContext from "../context/ThemeContext"

const Header = ({ siteTitle, siteDescription }) => (
  <ThemeContext.Consumer>
    {theme => (
      
      <div className="light">
        <div className="container main-header">
          <div>
              <Link
                to="/"
                style={{
                  textDecoration: `none`,
                }}
              >
                <strong>{siteTitle}</strong>
                <br/>
                <small><em>{siteDescription}</em></small>
              </Link>
          </div>
          
          <Menu/>
          <SocialNav/>

          <button className="dark-switcher" onClick={theme.toggleDark}>
            {theme.dark ? <span>☀</span> : <span>☾</span>}
          </button>
        </div>
      </div>
    )}
  </ThemeContext.Consumer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Header
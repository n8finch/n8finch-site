import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from './menu'

import ThemeContext from "../context/ThemeContext"

const Header = ({ siteTitle, siteDescription }) => (
  <ThemeContext.Consumer>
    {theme => (
      
        <footer className="container light">
            <br/>
            <hr/>
            <br/>
            © {new Date().getFullYear()}, A labor of ❤️, built on
            {` `}
            <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>
            {` `}by{` `}
            <a href="https://n8finch.com" target="_blank" rel="noopener noreferrer">Nate Finch</a>
        </footer>
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
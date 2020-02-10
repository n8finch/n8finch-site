import React from "react"
import { Link } from "gatsby"

export default () => {
    return (
      <nav>
        <ul>
            <li><Link to={`/talks`}>Talks</Link></li>
            <li><Link to={`/about`}>About Me</Link></li>
            <li><Link to={`/blog`}>Blog</Link></li>
            <li><Link to={`/contact`}>Contact</Link></li>
            
        </ul>
      </nav>
    )
}
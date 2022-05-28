import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function NateImage() {
  return (
    <StaticImage
      src="../assets/images/me-nate.jpg"
      alt="me Nate"
      placeholder="tracedSVG"
      layout="fixed"
      width={300}
      height={250}
			objectPosition="25% 50%"
    />
  )
}

export default NateImage
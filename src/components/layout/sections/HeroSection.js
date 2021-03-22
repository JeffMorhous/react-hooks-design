import React from "react"
import { Link } from "gatsby"
import "../layout.css"

function HeroSection() {
  return (
    <>
      <img src="/images/logos/logo.svg" alt="logo" />
      <h1>Design and Code Some Sick React Stuff</h1>
      <p>I don't really know what I'll be doing with this site though.</p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </>
  )
}

export default HeroSection
import React from "react"
//import styled from "@emotion/styled"
//import { css } from "@emotion/react"
import Navbar from "../components/navigation"
//import { Link } from "gatsby"

const pageStyles = {
  color: "#232129",
  //padding: 92,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 84,
  maxWidth: 1020,
}

//"just made Gatsby Site"
const headingAccentStyles = {
  color: "#663399",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Navbar></Navbar>
      <h1 style={headingStyles}>
        Welcome to Blended!
        <br />
        <span style={headingAccentStyles}>— you just made a Gatsby site! 🎉🎉🎉</span>
      </h1>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

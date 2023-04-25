import { Link } from "gatsby"
import { PropTypes } from "prop-types"
import React from "react"
import logo from "/Users/babygirl/Desktop/RootConnect/src/images/blended-logo.png"
import { Container, Navbar, Nav } from "react-bootstrap"

const Header = ({siteTitle}) => (
    <header>
        <Container>
            Test
        </Container>
    </header>
)

Header.PropTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: '',
}

export default Header
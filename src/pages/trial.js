import * as React from "react"
import {Link} from 'gatsby'

//Trail Run
const IndexPage = () => {
  return(
    <main>
      <h1>Welcome to Blended!</h1>
      <Link to="/about">About</Link>
      <p>I'm making this following the Gatsby Tutorial.</p>
    </main>
  )
}




export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage
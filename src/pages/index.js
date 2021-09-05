import * as React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Welcome to Evan's Blog</h1>
    <p>This is simple Gatsby Blog created by Evan.</p>
  </Layout>
)

export default IndexPage

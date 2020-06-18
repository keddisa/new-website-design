import React from "react"

import {Layout, SEO, MainHeader, MyPlayground, MyPortfolio, Testimonials, Contact, MyJourney} from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainHeader />
    <MyPlayground />
    <MyJourney />
    <MyPortfolio />
    <Testimonials />
    <Contact />
  </Layout>
)

export default IndexPage

import React from "react"

import {Layout, SEO, MainHeader, MyPlayground, Portfolio, Testimonials, Contact, TitleAside, MyJourney} from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainHeader theme="theme-1"/>
    <MyPlayground />
    <MyJourney />
    <TitleAside  title="Glance at my work"
                subTitle="Check these samples out"
                align="left"
                backgroundImage="portfolio-title"/>
    <Portfolio />
    <TitleAside  title="Testimonials"
                subTitle="What others have said"
                align="right"
                backgroundImage="testimonials-title"/>
    <Testimonials />
    <TitleAside  title="Get in touch"
                subTitle="Take action now"
                align="center"
                backgroundImage="contact-title"/>
    <Contact />
  </Layout>
)

export default IndexPage

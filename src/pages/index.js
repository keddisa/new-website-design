import React from "react"

import {Layout, SEO, MainHeader, MyPlayground, Skills, Journey, Portfolio, Testimonials, Contact, TitleAside, TextContainer} from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainHeader theme="theme-1"/>
    <MyPlayground />
    <TitleAside  title="My Journey"
                subTitle="How did I get here?"
                align="center"
                backgroundImage="journey-title"/>
    <Journey />
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

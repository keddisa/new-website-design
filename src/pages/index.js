import React from "react"

import {Layout, SEO, MainHeader, MyPlayground, MyPortfolio, Testimonials, Contact, MyJourney} from "../components"

const staggerProps = {
  container: {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        delayChildren: .5,
        staggerChildren: .07 
      }
    }
  },
  item: {
    hidden: { 
      opacity: 0
    },
    show: {
      opacity: 1 
    }
  }
}

const IndexPage = () => {
  return (<Layout>
  <SEO title="Home" />
  <MainHeader container={staggerProps.container} item={staggerProps.item}/>
  <MyPlayground />
  <MyJourney container={staggerProps.container} item={staggerProps.item}/>
  <MyPortfolio />
  <Testimonials />
  <Contact />
</Layout>)
}

export default IndexPage

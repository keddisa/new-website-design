/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <motion.div className="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            transition={{ duration: 2 }}>
      <Header/>
        <main className="main-content">{children}</main>
        <footer className="footer">
          <div className="text-content">
            © {new Date().getFullYear()}, Built by
            {` `}
            <a id="footer-link" href="https://www.andrewkeddis.com">Andrew Keddis</a>
          </div>
        </footer>
      </motion.div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import * as styles from '../styles/home.module.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
export default function Home({data}) {
  console.log(data);
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Pakistan.</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
        {/* <img src="/banner.png" alt="banner" style={{maxWidth: '100%'}}/> */}
        <GatsbyImage image={getImage(data.file.childImageSharp.gatsbyImageData)} />
      </section>
    </Layout>
  )
}

export const query = graphql`
query getBanner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      gatsbyImageData
    }
  }
}
`
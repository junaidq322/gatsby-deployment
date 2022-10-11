import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/layout'
import * as styles from '../../styles/project.module.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
function Projects({data}) {
  console.log(data);
  const projects = data.projects.nodes;
  const contact = data.contacts.siteMetadata.contact;
  console.log(projects,"Projects");
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={styles.projects}>
          {projects.map(project=> (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <GatsbyImage image={getImage(project.frontmatter.thumb.childImageSharp.gatsbyImageData)} alt="Banner"/>
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Email me at {contact}</p>
      </div>
    </Layout>
  )
}
export const query = graphql`
query ProjectsPage {
  projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        slug
        stack
        title
        thumb {
          childImageSharp {
            gatsbyImageData
        }
        }
      }
      id
    }
  }
  contacts: site {
    siteMetadata {
      contact
    }
  }
}
`

export default Projects
import React from 'react'
import ColorfulCircels from '../images/SVG/colorful-circels.svg'
import '../styles/technologies.scss'
import {useStaticQuery,graphql} from 'gatsby'
import Img from 'gatsby-image'

const Technologies = () => {
    const data = useStaticQuery(graphql`
    query {
      technologiesLogos: file(relativePath: { eq: "technologies-logos.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return (
        <section className='technologies'>
            <ColorfulCircels className='colorful-circels'/>
            <div className='technologies__container'>
            <h2 className='technologies__container--title'>Most used technologies</h2>
            <Img fluid={data.technologiesLogos.childImageSharp.fluid} className='technologies-logos'/>
            </div>
      </section>
    )
}

export default Technologies

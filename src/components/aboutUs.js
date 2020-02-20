import React from 'react'
import BgCircle from '../images/SVG/Bg-circle.svg'
import '../styles/about-us.scss'
import {useStaticQuery,graphql} from 'gatsby'
import Img from 'gatsby-image'

const AboutUs = () => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Illustration.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <section className='about-us'>
            <article className='about-us__article'>
              <h2 className='about-us__article--header'>About us</h2>
              <p className='about-us__article--text'>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                 sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              </p>
            </article>
            <div className='illustration-container'>
              <Img fluid={data.placeholderImage.childImageSharp.fluid} className='illustration'/>
            </div>
            <BgCircle className='bg-circle'/>
        </section>
    )
}

export default AboutUs
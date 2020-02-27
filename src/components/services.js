import React from 'react'
import '../styles/services.scss'

const Services = () => {
    return (
          <section className='services'>
            <div className='services__outter-bg'>
              <div className='services__outter-bg--horizontal-cards'>
                <div className='card card-blue'>
                  <h3 className='card__title'>Front-end</h3>
                  <ul className='card__list'>
                    <li className='card__list--item'>Responsive web design,</li>
                    <li className='card__list--item'>Well Planned Information,</li>
                    <li className='card__list--item'>Architecture, Contrasting Colour Scheme</li>
                  </ul>
                </div>
                <div className='card card-blue'>
                <h3 className='card__title'>Back-end</h3>
                  <ul className='card__list'>
                    <li className='card__list--item'>Responsive web design,</li>
                    <li className='card__list--item'>Well Planned Information,</li>
                    <li className='card__list--item'>Architecture, Contrasting Colour Scheme</li>
                  </ul>
                </div>
              </div>
              <div className='services__outter-bg--vertical-cards'>
                <div className='card card-blue'>
                <h3 className='card__title'>Design</h3>
                  <ul className='card__list'>
                    <li className='card__list--item'>Responsive web design,</li>
                    <li className='card__list--item'>Well Planned Information,</li>
                    <li className='card__list--item'>Architecture, Contrasting Colour Scheme</li>
                  </ul>
                </div>
                <div className='card card-green'>
                <h3 className='card__title'>Full Stack</h3>
                  <ul className='card__list'>
                    <li className='card__list--item'>Responsive web design,</li>
                    <li className='card__list--item'>Well Planned Information,</li>
                    <li className='card__list--item'>Architecture, Contrasting Colour Scheme</li>
                  </ul>
                </div>
              </div>
              <div className='services__inner-bg'>
                <h2 className='services__inner-bg--title'>Our services</h2>
              </div>
            </div>
          </section>
    )
}


export default Services
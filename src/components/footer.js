import React from 'react'
import {Link} from 'gatsby'
import Logo from '../images/SVG/Logo.svg'
import '../styles/footer.scss'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__nav'>
                <Link to='/contactus' className='footer__nav--link link-1'>Contact us</Link>
                <Link to='/faq' className='footer__nav--link link-2'>FAQ</Link>
            </div>
            <div className='footer__logo-container'>
                <Logo className='logo'/>
                <p className='copyrights'>All rights reserved &copy; 2020 </p>
            </div>
      </footer>
    )
}


export default Footer
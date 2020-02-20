import React from 'react'
import Menu from './subcomponents/menu'
import {Link} from 'gatsby'
import UpperCircels from '../images/SVG/UpperCircles.svg'
import Logo from '../images/SVG/Logo.svg'
import DownerCircels from '../images/SVG/downer-circels.svg'
import '../styles/header.scss'


const Header = () => (
    <div className='container'>
          <Menu />
          <header className='header'>
            <h1 className='header__main-header'>Create Your Digital Self</h1>
            <span className='header__sub-header'>and expand your business</span>
            <div className='header__button'>
              <Link className='header__button--link'>
                About us
              </Link>
            </div>
        </header>
        <UpperCircels className='upperCircels'/>
        <Logo className='logo'/>
        <DownerCircels className='downerCircels'/>
    </div>
)

export default Header

import React from 'react'
import {Link} from 'gatsby'
import '../../styles/menu.scss'

const Menu = () => (
<menu className='menu'>
            <nav className='menu__content'>
              <Link to='/contactus' className='menu__content--link'>Contact us</Link>
              <Link to='/faq' className='menu__content--link'>FAQ</Link>
            </nav>
</menu>
)

export default Menu

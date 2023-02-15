import React from 'react'
import style from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

import sushiImg from '../../assets/sushi.jpg'

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={style.header}>
        <h1>Япона Кухня</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={style['main-image']}>
        <img src={sushiImg} alt="Суши" />
      </div>
    </React.Fragment>
  )
}

export default Header
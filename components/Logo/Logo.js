import React from 'react'
import styles from './Logo.css'

import logo from '../../assets/images/burgerlogo.png'

export default function Logo() {
  return (
    <div className={styles.Logo}>
      <img src={logo} alt="logo"/>
    </div>
  )
}

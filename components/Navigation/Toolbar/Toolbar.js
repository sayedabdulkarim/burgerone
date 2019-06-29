import React, { Component } from 'react'
import styles from './Toolbar.css'

import Logo from '../../Logo/Logo'

import Navigationitems from '../Navigationitems/Navigationitems'

import Drawertoggle from '../Sidedrawer/Drawertoggle/Drawertoggle'

export default class Toolbar extends Component {
  render() {
    return (
      <header className={styles.Toolbar}>
        <Drawertoggle clicked={this.props.Drawertoggleclicked}/>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav className={styles.Desktoponly}>
            <Navigationitems />
        </nav>
      </header>
    )
  }
}

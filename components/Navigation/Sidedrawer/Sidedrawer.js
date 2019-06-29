import React, { Component } from 'react'
import styles from './Sidedrawer.css'

import Logo from '../../../components/Logo/Logo'
import Navigationitems from '../Navigationitems/Navigationitems'

import Backdrop from '../../UI/Backdrop/Backdrop'

export default class Sidedrawer extends Component {
  render() {
    // let attachedClass = [styles.SideDrawer, styles.Close]
    let attachedClass = `${styles.SideDrawer} ${styles.Close}`
    if(this.props.open){
      attachedClass = `${styles.SideDrawer} ${styles.Open}`
      // attachedClass = [styles.SideDrawer, styles.Open]
    }
  return (
      <React.Fragment>
        <Backdrop show={this.props.open} clicked={this.props.closed}/>
        <div className={attachedClass}>
          <div className={styles.Logo}>
            <Logo />
          </div>
          <nav>
            <Navigationitems />
          </nav>
        </div>
      </React.Fragment>
    )
  }
}

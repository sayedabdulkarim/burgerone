import React, { Component } from 'react'
import styles from './Drawertoggle.css'

export default class Drawertoggle extends Component {
  render() {
    return (
      <div className={styles.DrawerToggle} onClick={this.props.clicked}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}

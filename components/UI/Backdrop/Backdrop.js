import React, { Component } from 'react'
import styles from './Backdrop.css'

export default class Backdrop extends Component {
  render() {
    return (
      this.props.show ? <div className={styles.Backdrop} onClick={this.props.clicked}></div> : null
    )
  }
}

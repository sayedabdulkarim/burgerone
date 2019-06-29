import React, { Component } from 'react'
import styles from './Buildcontrol.css'

export default class Buildcontrol extends Component {
  render() {
    return (
      <div className={styles.BuildControl}>
        <div className={styles.Label}>{this.props.label}</div>
        <button className={styles.Less} onClick={this.props.removed} disabled={this.props.disabled}>Less</button>
        <button className={styles.More} onClick={this.props.added}>More</button>
      </div>
    )
  }
}

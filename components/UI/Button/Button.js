import React, { Component } from 'react'
import styles from './Button.css'

export default class Button extends Component {
  render() {
    return (
      <button className={[styles.Button, styles[this.props.btnType]].join(' ')} onClick={this.props.clicked}>{this.props.children}</button>
    )
  }
}

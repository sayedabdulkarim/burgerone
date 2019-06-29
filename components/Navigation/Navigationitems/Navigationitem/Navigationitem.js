import React, { Component } from 'react'
import styles from './Navigationitem.css'

import { NavLink } from 'react-router-dom'

export default class Navigationitem extends Component {
  render() {
    return (
        <li className={styles.Navigationitem}>
          <NavLink to={this.props.link} activeClassName={styles.active} exact>{this.props.children}</NavLink>
        </li>
    )
  }
}

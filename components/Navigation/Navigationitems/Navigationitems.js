import React, { Component } from 'react'
import styles from './Navigationitems.css'

import Navigationitem from './Navigationitem/Navigationitem'

export default class Navigationitems extends Component {
  render() {
    return (
      <ul className={styles.Navigationitems}>
        <Navigationitem link='/' >Burger Builder</Navigationitem>
        <Navigationitem link='/signin'>Signin</Navigationitem>
      </ul>
    )
  }
}

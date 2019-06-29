import React, { Component } from 'react'
import styles from './Spinner.css'

export default class Spinner extends Component {
  render() {
    return (
      <div className={styles.Loader}>
        Loading ...
      </div>
    )
  }
}

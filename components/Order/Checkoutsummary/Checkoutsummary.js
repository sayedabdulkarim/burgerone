import React, { Component } from 'react'
import styles from './Checkoutsummary.css'

import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'

export default class Checkoutsummary extends Component {
  render() {
    return (
      <div className={styles.Checkoutsummary}>
        <h1>We hope it tastes well ...</h1>
        <div style={{width: '100%', margin: 'auto'}}>
            <Burger ingredients={this.props.ingredients}/>
        </div>
        <Button btnType='Danger' clicked={this.props.checkoutCancelled} >CANCEL</Button>
        <Button btnType='Success' clicked={this.props.checkoutContinued}>CONTINUE</Button>
      </div>
    )
  }
}

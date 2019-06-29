import React, { Component } from 'react'
import styles from './Ordersummary.css'

import Button from '../../UI/Button/Button'

export default class Ordersummary extends Component {
  render() {
    const { ingredients } = this.props
    const ingredientsSummary = Object.keys(ingredients)
                  .map((item => {
                    return <li key={item}><span style={{textTransform: 'capitalize'}}>{item} - {ingredients[item]}</span></li>
                  }))
    // console.log(ingredients)
    return (
      <div>
          <div className={styles.Ordersummary}>
                 <h3>Your Order :</h3>
                 <p>A delicious burger with following ingredients :</p>
                 <ul>
                   {ingredientsSummary}
                 </ul>
                 <p><strong>Total Price : Rs. { this.props.price.toFixed(2) }</strong></p>
                 <p>Continue to Checkout ?</p>
                 <Button btnType='Danger' clicked={this.props.purchaseCancelled} >CANCEL</Button>
                 <Button btnType='Success' clicked={this.props.purchaseContinued}>CONTINUE</Button>
          </div>
      </div>
    )
  }
}

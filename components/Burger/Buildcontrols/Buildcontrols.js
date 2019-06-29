import React, { Component } from 'react'
import styles from './Buildcontrols.css'

import BuildControl from './Buildcontrol/Buildcontrol'

const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Meat', type: 'meat'},
  { label: 'Bacon', type: 'bacon'}
]

export default class Buildcontrols extends Component {
  render() {
    return (
      <div>
        <div className={styles.Buildcontrols}>
          <p>Current Price :- <strong>Rs. { this.props.price.toFixed(2)}</strong> </p>
          {
            controls.map(ctrl => {
              return <BuildControl 
                        key={ctrl.label} 
                        label={ctrl.label} 
                        type={ctrl.type}
                        added={this.props.addIngredients.bind(this, ctrl.type)}
                        removed={this.props.removeIngredient.bind(this, ctrl.type)}
                        disabled={this.props.disabled[ctrl.type]} />
            })
          }
          <button className={styles.OrderButton} disabled={!this.props.purchasable} onClick={this.props.ordered}>PLACE ORDER</button>
        </div>
      </div>
    )
  }
}

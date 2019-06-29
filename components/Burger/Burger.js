import React, { Component } from 'react'
import styles from './Burger.css'

import Burgeringredient from './Burgeringredient/Burgeringredient'

export default class Burger extends Component {
  render() {
    // console.log(this.props, ' Burger')

    const { ingredients } = this.props
    let tranformIngredient = Object.keys(ingredients)
              .map(igKey => {
                return [...Array(ingredients[igKey])].map((_, i) => {
                  return <Burgeringredient key={igKey + i} type={igKey}/>
                })
              }).reduce((p, n) => {
                return p.concat(n)
              })
            if(tranformIngredient.length === 0){
              tranformIngredient = <p>Please start adding ingredients.</p>
            }
    return (
      <div>
        <div className={styles.Burger}>
          <Burgeringredient type='bread-top'/>
            { tranformIngredient }
          <Burgeringredient type='bread-bottom'/>
        </div>
      </div>
    )
  }
}

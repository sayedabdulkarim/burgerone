import React, { Component } from 'react'
import styles from './Dashboard.css'

export default class Dashboard extends Component {
  render() {
    const { dashCart, dash } = this.props
    // console.log(dashCart)
    const { ingredients, firstname, lastname, address, phone, totalPrice } = dashCart
    const items = Object.keys(ingredients[0]).map(i => {
      // console.log(`${i} -- ${ingredients[0][i]}`)
      return <td key={i}>{ingredients[0][i]}</td>
    })

    let dashboard = <strong>please login to view your items</strong>
    
    if(dash){
      dashboard = (
        <React.Fragment>
          <h3>Welcome { firstname } { lastname }</h3>
          <p>Your Orders :-</p>
          <table>
            <tbody>
              <tr>
                <th>Salad</th>
                <th>Bacon</th>
                <th>Cheese</th>
                <th>Meat</th>
              </tr>
              <tr>
                { items }
              </tr>   
            </tbody>
          </table>
          <strong><i className='fas fa-home'/> { address }</strong>
          <strong><i className="fas fa-phone"/> +91 - { phone }</strong>
          <strong><i className='fas fa-rupee-sign'/> { parseInt(totalPrice).toFixed(2) }</strong>
        </React.Fragment>
      )
    }

    return (
      <div className={styles.Dashboard}>
        { dashboard }
      </div>
    )
  }
}

import React, { Component } from 'react'

import Burger from '../../components/Burger/Burger'
import Buildcontrols from '../../components/Burger/Buildcontrols/Buildcontrols'

import Modal from '../../components/UI/Modal/Modal'
import Ordersummary from '../../components/Burger/Ordersummary/Ordersummary'

import Loading from '../../components/UI/Spinner/Spinner'

import axios from 'axios'

const INGREDIENT_PRICE ={
  salad: 25,
  bacon: 30,
  cheese: 35,
  meat: 40
}

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0, 
      cheese: 0, 
      meat: 0
    }, 
    totalPrice: 70,
    purchasable: false,
    purchasing: false,
    loading: false
  }
  
  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey]
      }).reduce((s, n) => {
        return s + n
      }, 0)

      this.setState({ purchasable: sum >0 });
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    const updateCount = oldCount + 1
    const updateIngredients = {
      ...this.state.ingredients
    }
    updateIngredients[type] = updateCount;
    const priceAddition = INGREDIENT_PRICE[type]
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition

    this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
    this.updatePurchaseState(updateIngredients)
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    if(oldCount <= 0){
      return
    }
    const updateCount = oldCount - 1
    const updateIngredients = {
      ...this.state.ingredients
    }
    updateIngredients[type] = updateCount;
    const priceDeduction = INGREDIENT_PRICE[type]
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction

    this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
    this.updatePurchaseState(updateIngredients)
  }
  purchaseHandler = () => {
    this.setState({ purchasing: true });
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  }

  purchaseContinueHandler = () => {
    // this.setState({ loading: true });
    // const { ingredients, totalPrice } = this.state
    // const newUser = { ingredients, totalPrice }
    // axios.post('http://localhost:5000/register', newUser)
    //   .then(res => {
    //     this.setState({ loading: false, purchasing: false });
    //   })
    //   .catch(err => {
    //     this.setState({ loading: false, purchasing: false });
    //   })
    const queryParams= []
    for (let i in this.state.ingredients){
      queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
    }
    queryParams.push('price=' + this.state.totalPrice)
    const queryString = queryParams.join('&')
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString
    })
  }
  render() {
    const disableInfo = { ...this.state.ingredients}
    for (let key in disableInfo){
      disableInfo[key] = disableInfo[key] <= 0
    }

    let orderSummary = <Ordersummary 
                    ingredients={this.state.ingredients}
                    price={this.state.totalPrice}
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinued = {this.purchaseContinueHandler} /> 
            if(this.state.loading){
              orderSummary = <Loading />
            }
    return (
      <React.Fragment>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          { orderSummary }
          {/* <Ordersummary 
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued = {this.purchaseContinueHandler} /> */}
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <Buildcontrols 
           addIngredients={this.addIngredientHandler}
           removeIngredient={this.removeIngredientHandler}
           disabled={disableInfo}
           purchasable={this.state.purchasable}
           ordered={this.purchaseHandler}
           price={this.state.totalPrice} />
      </React.Fragment>
    )
  }
}

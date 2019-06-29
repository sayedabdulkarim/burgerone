import React, { Component } from 'react'
import axios from 'axios'

const ProductContext =  React.createContext()

const INGREDIENT_PRICE ={
  salad: 25,
  bacon: 30,
  cheese: 35,
  meat: 40
}

class ProductProvider extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 70,
    controls: [
      { label: 'Salad', type: "salad"},
      { label: 'Cheese', type: "cheese"},
      { label: 'Meat', type: "meat"},
      { label: 'Bacon', type: "bacon"},
    ],
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
    this.setState({ loading: true });
    const { ingredients, totalPrice } = this.state
    const newUser = { ingredients, totalPrice }
    axios.post('http://localhost:5000/register', newUser)
      .then(res => {
        this.setState({ loading: false, purchasing: false });
      })
      .catch(err => {
        this.setState({ loading: false, purchasing: false });
      })
  }

  render() {
    const disableInfo = { ...this.state.ingredients}
    for (let key in disableInfo){
      disableInfo[key] = disableInfo[key] <= 0
    }
    // console.log(this.state.purchasing, ' purchasing')
    return (
      <ProductContext.Provider value={{
        ...this.state,
        updatePurchaseState: this.updatePurchaseState,
        addIngredientHandler: this.addIngredientHandler,
        removeIngredientHandler: this.removeIngredientHandler,
        purchaseHandler: this.purchaseHandler,
        purchaseCancelHandler: this.purchaseCancelHandler,
        purchaseContinueHandler: this.purchaseContinueHandler,
        disableInfo: disableInfo
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}


const ProductConsumer = ProductContext.Consumer

export {ProductProvider, ProductConsumer}
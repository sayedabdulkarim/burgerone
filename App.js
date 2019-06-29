import React, { Component } from 'react'
import styles from './App.css'

import axios from 'axios'

import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'

import Signin from './containers/Log/Signin/Signin'
import Dashboard from './containers/Log/Dashboard/Dashboard'

import { HashRouter, Route, Switch, hashHistory} from 'react-router-dom'


export default class App extends Component {
   state ={
      dash: false,
      dashCart: [],
      error: {}
   }
   handleChange = (e) => {

      this.setState({ [e.target.name]: e.target.value });
   }
   
   handleSubmit = (e, email, password) => {
      e.preventDefault()
      const newUser = {
         email: email,
         password: password
      }
      axios.post('http://localhost:5000/login', newUser)
      .then(res => this.setState({ dashCart: res.data.decode.user, dash: true }))
      // .then(() => this.props.history.replace('/dashboard'))
      // .then((res) => console.log('login success', res.data.decode.user))
      .catch(err => this.setState({ error: err.response.data }))
   }
   render() {
      // console.log(this.state)
      return (
         <div>
            <HashRouter>
               <Layout>
                  <Switch>
                     <Route path='/dashboard' component={() => <Dashboard dashCart={this.state.dashCart} dash = {this.state.dash}/> }/>
                     <Route path='/signin' component={() => <Signin  handleChange={this.handleChange} handleSubmit={this.handleSubmit} errors={this.state.error} dash={this.state.dash}/>}/>
                     <Route path='/checkout' component={ Checkout }/>
                     <Route path='/' component={ BurgerBuilder }/>
                  </Switch>
               </Layout>
            </HashRouter>
         </div>
      )
   }
}

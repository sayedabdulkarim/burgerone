import React, { Component } from 'react'
import styles from './Contactdata.css'
import Loading from '../../../components/UI/Spinner/Spinner'

import axios from 'axios'

import Button from '../../../components/UI/Button/Button'

export default class Contactdata extends Component {
  state={
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    password2: '',
    phone: '',
    address: '',
    errors: {},

    loading: false,

    firstnameError: '',
    lastnameError: '',
    emailError: '',
    passwordError: '',
    password2Error: '',
    phoneError: '',
    addressError: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }  

  validate = () => {
    let firstnameError = '';
    let lastnameError = '';
    let emailError = '';
    let passwordError = '';
    let password2Error = '';
    let phoneError = '';
    let addressError = ''

    const { firstname, lastname, email, password, password2, phone, address} = this.state

    //firstname
    if(!firstname){
      firstnameError = <span><i style={{cursor: 'pointer'}} className="fas fa-times"></i> firstname cannot be blank</span>
    }
    //lastname
    if(!lastname){
      lastnameError = <span><i style={{cursor: 'pointer'}} className="fas fa-times"></i> lastname cannot be blank</span>
    }
    //email
    if(!email){
      emailError = <span><i style={{cursor: 'pointer'}} className="fas fa-times"></i> email cannot be blank</span>
    }
    //address
    if(!address){
      addressError = <span><i style={{cursor: 'pointer'}} className="fas fa-times"></i> address cannot be blank</span>
    }
    //password password2
    if(!password || !password2){
      passwordError = <span><i style={{cursor: 'pointer'}} className="fas fa-times"></i> password cannot be blank</span>
      password2Error = <span><i style={{cursor: 'pointer'}} className="fas fa-times"></i> confirm password cannot be blank</span>
    }
    if(password.length < 3 || password.length > 8){
      passwordError = <span><i style={{cursor: 'pointer'}} className="fas fa-times"></i> password length must be in between 3 - 8.</span>
    }

    if(password != password2){
      password2Error = <span><i style={{cursor: 'pointer'}} className="fas fa-times"></i> password doesnot match.</span>
    }
    
    //phone
    if(phone.length != 10){
      phoneError = <span><i style={{cursor: 'pointer'}} className="fas fa-times"></i> number must be of 10 digits.</span>
    }


    if(firstnameError || lastnameError || emailError || passwordError || password2Error || phoneError || addressError){
      this.setState({ firstnameError, lastnameError, emailError, passwordError, password2Error, phoneError, addressError });
      return false
    }

    return true
  }
  orderHandler = (e) => {
    e.preventDefault()
    
    const { ingredients, price } = this.props
    const totalPrice = price
    console.log(this.state)
    // console.log(totalPrice)
    const { firstname, lastname, email, password, phone, address } = this.state
    const newUser = { ingredients, totalPrice, firstname, lastname, email, password, phone, address }
    const isValid = this.validate()
    
    if(isValid){
        this.setState({ loading: true });
        axios.post('http://localhost:5000/register', newUser)
          .then(res => {
            this.setState({ loading: false });
            this.props.history.push('/')
          })
          .catch(err => {
            this.setState({ loading: false, errors: err.response.data });
          })
    }
  }
  render() {
    let form = (
        <form action="" onSubmit={this.orderHandler}>
          <div>
            <label htmlFor="firstname">Fisrtname</label>
            <input type="text" name="firstname" onChange={this.handleChange} value={this.state.firstname} placeholder='First Name'/>
            <span>{this.state.firstnameError}</span>
          </div>
          <div>
            <label htmlFor="lastname">Lastname</label>
            <input type="text" name="lastname" onChange={this.handleChange} value={this.state.lastname} placeholder='Last Name'/>
            <span>{this.state.lastnameError}</span>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" onChange={this.handleChange} value={this.state.email} placeholder='Email'/>
            <span>{this.state.emailError}</span>
            { this.state.errors ? <span>{this.state.errors.msg}</span> : null }
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder='Password'/>
            <span>{this.state.passwordError}</span>
          </div>
          <div>
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input type="password" name="password2" onChange={this.handleChange} value={this.state.password2} placeholder='Confirm Password'/>
            <span>{this.state.password2Error}</span>
          </div>
          <div>
            <label htmlFor="city">Phone</label>
            <input type="number" name="phone" onChange={this.handleChange} value={this.state.phone} placeholder='Phone'/>
            <span>{this.state.phoneError}</span>
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <textarea className={styles.Textarea} onChange={this.handleChange} value={this.state.address} name="address" cols="10" rows="5" placeholder='Enter Address'></textarea>
            <span>{this.state.addressError}</span>
          </div>

          <input type="submit" value='SUBMIT'/>
          {/* <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button> */}
        </form>
    )
    if(this.state.loading){
      form = <Loading />
    }
    // console.log(this.state.errors)
    return (
      <div className={styles.Contactdata} >
        <h4>Enter your contact data</h4>
        { form }
      </div>
    )
  }
}

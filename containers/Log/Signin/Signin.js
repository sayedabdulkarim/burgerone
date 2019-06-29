import React, { Component } from 'react'
import styles from './Signin.css'

import { Link, withRouter } from 'react-router-dom'
import Logo from '../../../assets/images/burgerlogo.png'

class Signin extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
   
  }

  render() {
    const { email, password } = this.state
    const { handleSubmit, errors, dash } = this.props
    const { msg } = errors
    // console.log(this.props.history)
    return (
      <React.Fragment>
        <div className={styles.Signin} >
            
            <div className={styles.Signintext}>
              <div>
                <h2>Sign In</h2>
                <span><a href="#/signin">login to your account</a></span>
              </div>
                <div style={{width: '20%'}}>
                  <img src={Logo} style={{width: '100%'}} alt=""/>
                </div>
            </div>
            
            <div className={styles.Signinform}>
                { errors ? <span style={{fontSize: '0.6rem', color: 'red', margin: '5px 0'}}>{ msg }</span> : null}
                
                <form action="" onSubmit={(e) => handleSubmit(e, email, password) }>
                  <div className={styles.Inputgroup}>
                    <input type="email" onChange={(e) => this.handleChange(e)} value={this.state.email} name="email" id=""/>
                    <span>Email</span>
                  </div>
                  <div className={styles.Inputgroup}>
                    <input type="password" onChange={(e) => this.handleChange(e)} value={this.state.password} name="password" id=""/>
                    <span>Password</span>
                  </div>
                  <div className={styles.Inputgroup}>
                    <input type="submit" value='CONTINUE' onClick={dash ? this.props.history.replace('/dashboard') : null}/>
                    {/* <button type='submit'>SUBMIT</button> */}
                    {/* <p style={{fontSize: '0.7rem'}}>By creating an account, I accept the <strong style={{color: 'blue'}}>Terms & Conditions</strong></p> */}
                  </div>
                </form>  
            </div>
                

        </div>
      </React.Fragment>
    )
  }
}
export default withRouter(Signin)
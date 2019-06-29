import React, { Component } from 'react'
import styles from './Layout.css'

import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/Sidedrawer/Sidedrawer'

export default class Layout extends Component {
  state = {
    showSidedrawer: false
  }
  sideDrawerCloseHander = () => {
    this.setState({ showSidedrawer: false });
  }
  sideDrawertoggleHandler = () => {
    // this.setState({ showSidedrawer: !this.state.showSidedrawer });
    this.setState(prevState => {
      return { showSidedrawer: !prevState.showSidedrawer };
    });
  }
  render() {
    return (
      <React.Fragment>
        <Toolbar Drawertoggleclicked={this.sideDrawertoggleHandler}/>
        <SideDrawer 
            open={this.state.showSidedrawer}
            closed={this.sideDrawerCloseHander} />

        <main className={styles.Content}>
          {this.props.children}
        </main>

      </React.Fragment>
    )
  }
}

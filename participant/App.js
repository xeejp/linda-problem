import React, { Component } from 'react'
import { connect } from 'react-redux'

import WaitingPage from './WaitingPage'
import Question from './Question'

const mapStateToProps = ({}) => ({
})

class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <WaitingPage />
        <Question />
      </div>
    )
  }
}

export default connect()(App)

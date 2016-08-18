import React, { Component } from 'react'
import { connect } from 'react-redux'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'
import RaisedButton from 'material-ui/RaisedButton'

import { submitAnswer } from './actions'

const mapStateToProps = ({status}) => ({
  status,
})

class QuestionAnswers extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {value: null}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event, value) {
    this.setState({
      value
    })
  }

  handleClick() {
    const { dispatch } = this.props
    dispatch(submitAnswer(this.state.value))
  }

  render() {
    const { status } = this.props
    return (
      <div>
        {status == null
          ? <RadioButtonGroup name="shipSpeed" onChange={this.handleChange} defaultSelected={status} >
            <RadioButton value="programmer" label="プログラマ" />
            <RadioButton value="banker" label="銀行員" />
            <RadioButton value="each" label="プログラマで環境保護活動家" />
          </RadioButtonGroup>
          : <RadioButtonGroup name="shipSpeed" onChange={this.handleChange} defaultSelected={status} >
            <RadioButton value="programmer" label="プログラマ" disabled={true} />
            <RadioButton value="banker" label="銀行員" disabled={true} />
            <RadioButton value="each" label="プログラマで環境保護活動家" disabled={true} />
          </RadioButtonGroup>} 

        {
          status != null
          ? <div>
            <RaisedButton label="送信" primary={true} disabled={true} onClick={this.handleClick.bind(this)} />
            <p>残り{}名です。</p>
          </div>
          : this.state.value != null || status != null
            ? <div>
              <RaisedButton label="送信" primary={true} onClick={this.handleClick.bind(this)} />
              </div>
            : null
        }
      </div>
    )
  }
}

export default connect(mapStateToProps)(QuestionAnswers)

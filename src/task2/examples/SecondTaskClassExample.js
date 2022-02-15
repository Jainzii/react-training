import React from 'react'

class SecondTaskClassExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: "", text2: "", count: 0}
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.text !== this.state.text ||
      prevState.text2 !== this.state.text2 ){
      this.setState({count: this.state.count + 1})
    }
  }

  render() {
    return (
      <div>
        <div>
          <label>Text: </label>
          <input value={this.state.text} onChange={event => this.setState({text: event.target.value})}/>
        </div>

        <div>
          <label>Text2: </label>
          <input value={this.state.text2} onChange={event => this.setState({text2: event.target.value})}/>
        </div>

        <p>Textfelder wurden {this.state.count} mal gerendert</p>
      </div>
    )
  }
}

export default SecondTaskClassExample
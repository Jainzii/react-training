import React from 'react'

class FirstTaskClassExample extends React.Component {

  render() {
    return(
      <div>
        <p>Name: {this.props.name}</p>
        <p>Alter: {this.props.age}</p>
        <p>Adresse: {this.props.address}</p>
      </div>
    )
  }
}

export default FirstTaskClassExample
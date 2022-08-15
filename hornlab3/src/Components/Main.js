import React, { Component } from 'react'

import HornedBeast from './HornBeast'


export default class Main extends Component {
  render() {
    return (
      <div>
        {this.props.data.map(obj => {
          return <HornedBeast updateState={this.props.updateState} imageUrl={this.props.imageUrl}
            image_url={obj.image_url} title={obj.title} description={obj.description}></HornedBeast>
        })}
      </div>
    )
  }
}
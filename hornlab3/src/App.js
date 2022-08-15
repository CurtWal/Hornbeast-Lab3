import React, { Component } from 'react'

import Header from './Components/Header'
import Main from './Components/Main'
import SelectedBeast from './Components/SelectedBeast'
import Footer from './Components/Footer'
import './index.css'
import data from './Components/data.json'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hornBeast: [
        {
          title: '',
          description: '',
          image: '',

        }
      ],
      isSelected: false,
    }
  }

  updateState = (hornBeast) => {
    const newState = {
      title: hornBeast.title, description: hornBeast.description, image: hornBeast.image,
    }
    this.setState({
      hornBeast: [newState],
      isSelected: true,
    })
  }

  changeIsSelected = () => {
    this.setState({
      isSelected: false,
    })
  }

  render() {
    return (
      <>
        <Header />
        <div>
          <Main data={data} updateState={this.updateState} />
        </div>
        {<SelectedBeast beastState={this.state.hornBeast} isSelected={this.state.isSelected} changeIsSelected={this.changeIsSelected} />}
        <Footer />
      </>
    )
  }
}
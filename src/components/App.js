import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (e) => {
    this.setState({
      filters: {
        type: e.target.value
      }
    })
  }

  onFindPetsClick = () => {
    if (this.state.filters.type === 'all'){
      fetch('/api/pets')
      .then(res => res.json())
      .then(json => this.setState({
        pets: json
      }))
    } else {
      fetch('/api/pets?type=' + this.state.filters.type)
      .then(res => res.json())
      .then(json => this.setState({
        pets: json
      }))
    }
  }

  onAdoptPet = (id) => {
    let pets = this.state.pets.map(pet => {
      if (pet.id === id) {
        pet.isAdopted = true
      }
      return pet
    })

    this.setState({pets})
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

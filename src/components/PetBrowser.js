import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  generatePetCards = () => {
    return this.props.pets.map(pet => <Pet onAdoptPet={this.props.onAdoptPet} pet={pet} key={pet.id}/>)
  }

  render() {
    return <div className="ui cards">{this.generatePetCards()}</div>
  }
}

export default PetBrowser

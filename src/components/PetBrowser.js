import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {

  petsMapper = () => {
    return this.props.pets.map ((pet) =>
       <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet} />
    )
  }

  render() {
    return <div className="ui cards">{this.petsMapper()}</div>
  }
}

export default PetBrowser

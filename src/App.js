import React , { Component } from 'react'
import './App.css';

import BurgerStack from './components/BurgerStack';
import Ingredients from './components/Ingredients';
import Pokedex from './components/Pokedex';

const ingredients = [
  {name: 'Kaiser Bun', color: 'saddlebrown'},
  {name: 'Sesame Bun', color: 'sandybrown'},
  {name: 'Gluten Free Bun', color: 'peru'},
  {name: 'Lettuce Wrap', color: 'olivedrab'},
  {name: 'Beef Patty', color: '#3F250B'},
  {name: 'Soy Patty', color: '#3F250B'},
  {name: 'Black Bean Patty', color: '#3F250B'},
  {name: 'Chicken Patty', color: 'burlywood'},
  {name: 'Lettuce', color: 'lawngreen'},
  {name: 'Tomato', color: 'tomato'},
  {name: 'Bacon', color: 'maroon'},
  {name: 'Onion', color: 'lightyellow'}
]

class App extends Component {

  state={
    ingredientsToDisplay: []
  }

  handleStateChange = e => {
    e.preventDefault()
    const selectedIngredientName = e.target.name
    const findIngredientName = ingredients.filter(ingredient => {
      return ingredient.name.toLowerCase().includes(selectedIngredientName.toLowerCase())
    })
    this.setState((prevState) => {
      return {
        ingredientsToDisplay: [ findIngredientName, ...prevState.ingredientsToDisplay ]
      }
    })
  }

  handleStateReset = e => {
    e.preventDefault()
    this.setState(() => {
      return {
        ingredientsToDisplay: []
      }
    })
  }

  render() {

    const allIngredients = ingredients.map((thisIngredient,i) => {
      return (
        <Ingredients
          ingredient={thisIngredient}
          key={i}
          onClick={this.handleStateChange}
        />
      )
    })

    const burgerStack = this.state.ingredientsToDisplay.map((addedIngredient,i) => {
      return (
        <BurgerStack 
          addedIngredient={addedIngredient[0]}
          key={i}
        />
      )
    })

    return (
      <div className="App">
          <div className='ingredient-list'>
            <h1 className="section-title">Ingredients</h1>
            <div className='ingredients'>
              {allIngredients}
            </div>
          </div>

          <div className='burger-stack'>
            <div className='burger-ingredients'>
                <div className='burger-box'>
                  {burgerStack}
                </div>
            </div>
            <div className='align-bottom'>
              <h1 className='section-title'>Burger Stacking Area</h1>
              <button onClick={this.handleStateReset}>Clear</button>
            </div>
          </div>
          <Pokedex />
      </div>
    );
  }
}

export default App;

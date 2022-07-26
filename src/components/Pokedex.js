import React, { Component } from 'react'

class Pokedex extends Component {
    state = {
        pokemon: []
    }

    // for making a fetch request RIGHT WHEN mounting phase completes
    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
            .then(res => res.json())
            .then(res => {
                this.setState({ pokemon: res.results })
            })
            .catch()
    }

    // for making a fetch request after the mounting phase during the 'update' phase
    componentDidUpdate(prevProps, prevState) {
        // HAVE to have the 'if' condition to run another fetch!
        if(prevState.pokemon.length < 149) {
            fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
                .then(res => res.json())
                .then(res => {
                    this.setState({ pokemon: res.results })
                })
                .catch()
        }
    }

    componentWillUnmount() {
        // code block will go in here
    }

    render () {
        return (
            <>
            
            </>
        )
    }
}

export default Pokedex


import React from "react";
import PokemonCard from "./PokemonCard";

export default class PokemonTeam extends React.Component{
    constructor(props){
        super(props);
        // empty array to input data
        this.state = {
            pokemonTeam: []
        }
    }
    

    // Make request to PokeAPI
    // on component load
    async componentDidMount() {

        // Get Random Pokemon number
        function getRandomPokemonId(){
        return Math.floor(Math.random() * 386) + 1;
        }

        // Loop for team of 6 pokemon
        for (let index = 0; index < 6; index++){
            
            let randomNumber = getRandomPokemonId();
            console.log(randomNumber);

            let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber).catch(error => {
                console.log(error);
                return error;
            });
            let data = await response.json();
            console.log(data.name);

            //Invalid way to update state
            // this.state.pokemonTeam.push(data)
            // Valid way to update state:
            this.setState({pokemonTeam: [...this.state.pokemonTeam, data]});

            // console.log("UUID example");
            // console.log(crypto.randomUUID());
        }
    }

    componentDidUpdate(){
        console.log("This component has updated and re-rendered!")
    }

    // Store data from each request

    // Pass each data to PokemonCard components

    // How do we render HTML in class component?

    render(){
        return(
            <div>
                <h1>Pokemon data here</h1>

                {this.state.pokemonTeam && this.state.pokemonTeam.map((pokemon, index) => {
                    // return <h1 key={crypto.randomUUID}>{pokemon.name}</h1>
                    return <PokemonCard key={crypto.randomUUID()} name={pokemon.name} sprite={pokemon.sprites.front_default} />
                })}
            </div>
        )
    }
}
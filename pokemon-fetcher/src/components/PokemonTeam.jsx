

import React from "react";

export default class PokemonTeam extends React.Component{
    constructor(props){
        super(props);
    }
    

    // Make request to PokeAPI
    // on component load
    async componentDidMount() {

        // Get Random Pokemon number
        function getRandomPokemonId(){
        return Math.floor(Math.random() * 386) + 1;
        }

        let randomNumber = getRandomPokemonId();
        console.log(randomNumber);

        let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber).catch(error => {
            console.log(error);
            return error;
        });
        let data = await response.json();
        console.log(data.name);
    }
    // Store data from each request

    // Pass each data to PokemonCard components

    // How do we render HTML in class component?

    render(){
        return(
            <div>
                <h1>Pokemon data here</h1>
            </div>
        )
    }
}
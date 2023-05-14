const React = require('react')

class Show extends React.Component {
    render() {
        const { pokemon } = this.props
        return (
            <div>
                <h1>Gotta Catch 'Em All</h1>
                
                <ul>
                    <li>
                        <h2>{pokemon.name}</h2>
                        {''} 
                        <img src= {pokemon.img + ".jpg"}></img>
                         <a href={pokemon.img} alt="img"></a> <br></br>
                        < a href='/pokemons'>Return to Home </a>
                    </li>
                </ul>
            </div>
        )
    }
}
module.exports = Show
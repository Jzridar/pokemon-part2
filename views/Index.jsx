const React = require('react');

const myStyle = {
  color: 'gray',
  backgroundColor: 'ligitblue',

};

class Index extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div style={myStyle}>
        <h1>See All the pokemon</h1>
        <ul>
          {pokemons.map((pokemon, i) => {
            return (
              <li>
                The {' '}
                <a href={`/pokemons/${pokemon.id}`}> {pokemon.name.toUpperCase()}
                </a> {' '}

                is <br /> <img src={pokemon.img + ".jpg"} /> <br></br>
              </li>
            );
          })}
        </ul>
        <nav>
          <a href="/pokemon/new">Create a New pokemon</a>
        </nav>
      </div>
    );
  }
}
module.exports = Index;
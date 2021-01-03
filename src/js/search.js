async function search(id){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    const pokemon = await res.json()
    return pokemon
}

export default search
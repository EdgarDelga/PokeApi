
const fetchPokemon = () => {
    
const pokename = document.getElementById("pokename");
let pokeInput = pokename.value;
pokeInput = pokeInput.toLowerCase();
const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;

fetch(url)
.then(response => response.json())
.then (data =>{

    let element = document.getElementById("name").innerText = data.name;
    document.getElementById("pokeImg").src = data.sprites.other.home.front_default;
    document.getElementById("peso").innerText = " Peso: " + data.weight / 10 + "kg";
    document.getElementById("altura").innerHTML = " Altura: " + data.height / 10 + "m";
    document.getElementById("type").innerHTML = "Tipo: " + data.types.map((type) => type.type.name);
    document.getElementById("HP").innerHTML = "HP: " + data.stats[0].base_stat;
    document.getElementById("xp").innerHTML = data.base_experience + " exp";
    document.getElementById("moves").innerHTML =" Moves: " + data.moves[0].move.name;
    document.getElementById("atk").innerHTML = "ATK:     " + data.stats[2].base_stat;
    document.getElementById("DEF").innerHTML = "DEF:     " + data.stats[3].base_stat;
    document.getElementById("SPD").innerHTML = "SPD:     " + data.stats[5].base_stat;
    document.getElementById("special").innerHTML = "Special ATK:     " + data.stats[4].base_stat;
    console.log(atk)

    
    console.log(data)
})
}

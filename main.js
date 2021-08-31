//Getting the elements

const $name = document.querySelector(".name-text")
const $type = document.querySelector(".type")
const $img = document.querySelector(".image > img")
const $hp = document.querySelector(".hp-result")
const $attack = document.querySelector(".attack-result")
const $defense = document.querySelector(".defense-result")
const $special_attack = document.querySelector(".special-attack-result")
const $special_defense = document.querySelector(".special-defense-result")
const $speed = document.querySelector(".speed-result")

const $restart = document.querySelector(".restart")

const app = ()=> {
    let random = Math.floor(Math.random() * 200) + 1

    let url = `https://pokeapi.co/api/v2/pokemon/${random}`

    const getUrl = (url)=> {
        fetch(url)
        .then(res => res.json())
        .then(res => insertValues(res))
    }

    const insertValues = (res)=> {
        $name.textContent = res.name
        $type.textContent = res.types[0].type.name
        $img.src = res.sprites.other.dream_world.front_default
        $hp.textContent = res.stats[0].base_stat
        $attack.textContent = res.stats[1].base_stat
        $defense.textContent = res.stats[2].base_stat
        $special_attack.textContent = res.stats[3].base_stat
        $special_defense.textContent = res.stats[4].base_stat
        $speed.textContent = res.stats[5].base_stat
        console.log(res)
    }

    getUrl(url)

    console.log(url)

    $restart.addEventListener("click", ()=> {
        app()
    })
}

app()
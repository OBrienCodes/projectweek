// Our code here

const headerPic = document.getElementById("headerPic")

fetch(`http://localhost:3000/characters`)
.then(res => res.json())
.then(characters => characters.forEach(renderCharacters))

const renderCharacters = (character) => {
    const characterCollection = document.querySelector("#character-collection")

    const characterCard = document.createElement('div')
    characterCard.className = 'card'

    const characterName = document.createElement('h2')
    characterName.innerText = character.fullName
    
    const characterImage = document.createElement('img')
    characterImage.src = character.imageURL

    const characterHouse = document.createElement('p')
    characterHouse.innerText = character.family

    const line = document.createElement('p')
    line.innerText = "▬▬ι═══════>"

    const characterTitle = document.createElement('p')
    characterTitle.innerText = character.title

    const winter = document.createElement('img')
    winter.src = `https://freepngimg.com/thumb/artwork/81087-art-winter-symmetry-house-is-stark-coming-thumb.png`
    
    winter.classList.add("winter")

    winter.addEventListener('click', () => {
        if(winter.src === (`https://freepngimg.com/thumb/artwork/81087-art-winter-symmetry-house-is-stark-coming-thumb.png`)){
            winter.src = `https://acegif.com/wp-content/gifs/fire-65.gif`
        }
        else {winter.src = (`https://freepngimg.com/thumb/artwork/81087-art-winter-symmetry-house-is-stark-coming-thumb.png`)}
    })

    characterCard.append(characterName, characterImage, characterHouse, line, characterTitle, winter)
    characterCollection.append(characterCard)
}

let addCharacter = false

document.addEventListener('DOMContentLoaded', () => {
    const addCharacterForm = document.querySelector(".add-character-form")
    addCharacterForm.style.display = "none"

    const createCharacterButton = document.querySelector("#new-character-btn")
    
    createCharacterButton.addEventListener('click', () => {
        const themeMusic = document.getElementById("intro")
        themeMusic.play()
    })
    createCharacterButton.addEventListener('click', () => {
        addCharacter = !addCharacter
        if(addCharacter) {
            addCharacterForm.style.display = "block"
        } else {
            addCharacterForm.style.display = "none"
        }
    })

    const enter7KingdomsBtn = document.querySelector(".add-character-form")
    enter7KingdomsBtn.addEventListener("submit", (e) => {
        const themeMusic = document.getElementById("intro")
        e.preventDefault()
        themeMusic.pause()
        const winter = document.getElementById("winter-is-coming")
        winter.play()

        addCharacter = !addCharacter
        if(addCharacter) {
            addCharacterForm.style.display = "block"
        } else {
            addCharacterForm.style.display = "none"
        }

        fetch(`http://localhost:3000/characters`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json"
            },
            body: JSON.stringify({
                "fullName": e.target.name.value,
                "imageURL": e.target.image.value,
                "family": e.target.house.value,
                "title": e.target.title.value
            })
        })
        .then(res => res.json())
        .then((newCharacter) => {
            renderCharacters(newCharacter)
        })
        enter7KingdomsBtn.reset()
    })
})
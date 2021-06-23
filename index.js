// Our code here

const headerPic = document.getElementById("headerPic")

fetch(`https://thronesapi.com/api/v2/Characters`)
.then(res => res.json())
.then(characters => characters.forEach(renderCharacters))

const renderCharacters = (character) => {
    // console.log(character)
    const characterCollection = document.querySelector("#character-collection")

    const characterCard = document.createElement('div')
    characterCard.className = 'card'

    const characterName = document.createElement('h2')
    characterName.innerText = character.fullName
    
    const characterImage = document.createElement('img')
    characterImage.src = character.imageUrl

    const characterHouse = document.createElement('h3')
    characterHouse.innerText = character.family

    const characterTitle = document.createElement('h3')
    characterTitle.innerText = character.title

    const dragon = '🐉'
    const swords = '⚔️'

    const likeButton = document.createElement('h1')
    likeButton.innerText = dragon
    likeButton.addEventListener('click', () => {
        if(likeButton.innerText === dragon){
            likeButton.innerText = swords
        }
        else {likeButton.innerText = dragon}
    })

    characterCard.append(characterName,characterImage, characterHouse, characterTitle, likeButton)
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
})


// Our code here

fetch(`https://thronesapi.com/api/v2/Characters`)
.then(res => res.json())
.then(characters => characters.forEach(renderCharacters))

const renderCharacters = (character) => {
    console.log(character)
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



    


    characterCard.append(characterName,characterImage, characterHouse, characterTitle)
    characterCollection.append(characterCard)

}
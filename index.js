// Our code here

fetch(`https://thronesapi.com/api/v2/Characters`)
.then(res => res.json())
.then(characters => characters.forEach(renderCharacters))

const renderCharacters = (character) => {
    
    const characterCollection = document.querySelector("#character-collection")

    const characterCard = document.createElement('div')
    characterCard.className = 'card'

    const characterName = document.createElement('h2')
    characterName.innerText = character.fullName
    
    const characterImage = document.createElement('img')
    characterImage.src = character.imageUrl

    


    characterCard.append(characterName, characterImage)
    characterCollection.append(characterCard)

}
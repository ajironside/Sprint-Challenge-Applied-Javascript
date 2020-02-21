// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const articleEntry = document.querySelector('.cards-container')

axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        //console log data to review structure
        //console.log('res', response)
        //console.log('res.data.articles', response.data.articles)

        const articleInfo = Object.values(response.data.articles)
            //console.log(articleInfo)

        articleInfo.map(content => {
            content.map(content2 => {
                articleEntry.appendChild(cardCreator(content2))
            })
        })
    })
    .catch(error => {
        console.log('Error', error)
        const whoops = document.createElement('p')
        whoops.textContent = "An error occured while fetching this content"
        articleEntry.appendChild(whoops)
    })

//card component
function cardCreator(articleObj) {
    //define elements
    const newCard = document.createElement('div')
    const newHeadline = document.createElement('div')
    const newAuthor = document.createElement('div')
    const imgContainer = document.createElement('div')
    const newAuthorPhoto = document.createElement('img')
    const newAuthorName = document.createElement('span')

    //append elements
    newCard.appendChild(newHeadline)
    newCard.appendChild(newAuthor)
    newAuthor.appendChild(imgContainer)
    newAuthor.appendChild(newAuthorName)
    imgContainer.appendChild(newAuthorPhoto)

    //add class names
    newCard.classList.add('.card')
    newHeadline.classList.add('.headline')
    newAuthor.classList.add('.author')
    imgContainer.classList.add('.img-container')

    //add content
    newHeadline.textContent = articleObj.headline
    newAuthorPhoto.src = articleObj.authorPhoto
    newAuthorName.textContent = articleObj.authorName

    //return
    return newCard
}
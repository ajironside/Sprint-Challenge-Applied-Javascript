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


//article components
const articleEntry = document.querySelector('.cards-container')

axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        //console log data to review structure
        //console.log('res', response)
        console.log('res.data.articles', response.data.articles)

        //response.data.articles.
    })
    .catch()

//card component
function cardCreator(headline, authorPhoto, authorName) {
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
    newHeadline.textContent = headline
    newAuthorPhoto.src = authorPhoto
    newAuthorName.textContent = authorName

    //return
    return newCard
}

//create card for each article and add to DOM
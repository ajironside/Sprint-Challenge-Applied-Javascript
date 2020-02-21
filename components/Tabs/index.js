// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//create axios request
const page = document.querySelector('.topics')

axios
    .get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
        //console log data to review structure
        console.log('res', response)

        //Iterate over topics using tab component
    })
    .catch(error => {
        console.log('Error', error)
        const whoops = document.createElement('p')
        whoops.textContent = "An error occured while fetching this content"
        page.appendChild(whoops)
    })

//create a tab component


//add it to the DOM
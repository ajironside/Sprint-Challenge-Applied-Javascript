// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerData = [{
    date: "MARCH 28, 2019",
    title: "Lambda Times",
    temp: "98°"
}]

function Header(date, title, temp) {
    //define elements
    const createHeader = document.createElement('div');
    const headerDate = document.createElement('span');
    const headerTitle = document.createElement('h1');
    const headerTemp = document.createElement('span');

    //set up structure
    createHeader.appendChild(headerDate)
    createHeader.appendChild(headerTemp)
    createHeader.appendChild(headerTitle)

    //add class names
    createHeader.classList.add('header')
    headerDate.classList.add('date')
    headerTemp.classList.add('temp')

    //add content
    headerTitle.textContent = title
    headerDate.textContent = date
    headerTemp.textContent = temp

    //return
    return createHeader

}

//grab parent element
const headerContainer = document.querySelector('.header-container');

//iterate function over data
headerData.map(data => {
    headerContainer.appendChild(Header(data.title, data.date, data.temp))
})
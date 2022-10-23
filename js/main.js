let orderedList = document.querySelector('ol')
const arrayLinks = [
    {
        label: "Week 1 notes",
        url: "week1/index.html"
    },
    {
        label: "Week 2 notes",
        url: "week2/index.html"
    },
    {
        label: "Week 3 notes",
        url: "week3/index.html"
    },
    {
        label: "Week 4 notes",
        url: "week4/index.html"
    },
    {
        label: "Week 5 notes",
        url: "week5/index.html"
    },
    {
        label: "Todo",
        url: "todo/index.html"
    }
]

for (let i = 0; i < arrayLinks.length; i++) {
    // console.log(arrayLink)
    let list = document.createElement('li')
    let link = document.createElement('a')
    link.setAttribute('href', arrayLinks[i].url)
    link.innerHTML = arrayLinks[i].label
    orderedList.appendChild(list)
    list.appendChild(link)
}
    

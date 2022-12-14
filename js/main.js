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
        label: "Week 7 notes",
        url: "week7/index.html"
    },
    {
        label: "Week 8 notes",
        url: "week8/index.html"
    },
    {
        label: "Week 9 notes",
        url: "week9/index.html"
    },
    {
        label: "Week 10 notes",
        url: "week10/index.html"
    },
    {
        label: "Week 11 notes",
        url: "week11/client/index.html"
    },
    {
        label: "Week 12 notes",
        url: "week12/index.html"
    },
    {
        label: "Todo",
        url: "todo/index.html"
    },
    {
        label: "Weather App",
        url: "weatherapp/index.html"
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
    

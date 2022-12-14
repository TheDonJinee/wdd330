function getJSON(url) {
  return fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        return response.json();
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
function getProfile(url) {
  return getJSON(url);
}
function renderPersonList(people, personListElement) {
  const list = personListElement.children[1];
  list.innerHTML = "";
  people.forEach(function (person) {
    let listItem = document.createElement("tr");
    listItem.innerHTML = `
        <td><a href="${person.url}">${person.name}</a></td>
        <td>${person.birth_year}</td>
        <td>${person.height}</td>
              `;
    listItem.addEventListener("click", function (event) {
      event.preventDefault();
      getPersonDetails(person.url);
    });

    list.appendChild(listItem);
  });
}
function renderPersonDetails(personData) {
}

function showPeople(url = "https://swapi.dev/api/people/") {
  getProfile(url).then(function (data) {
    const results = data.results;
    const personListElement = document.getElementById("peoplelist");
    renderPersonList(results, personListElement);

    if (data.next) {
      const next = document.getElementById("next");
      next.ontouchend = () => {
        showPeople(data.next);
      };
    }
    if (data.previous) {
      const prev = document.getElementById("prev");

      prev.ontouchend = () => {
        showPeople(data.previous);
      };
    }
  });
}
function getPersonDetails(url) {
  getProfile(url).then(function (data) {
    renderPersonDetails(data);
  });
}
showPeople();
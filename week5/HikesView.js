'use strict';
// the dataset only has a relative path in it...we need more to find the images...so we have a path variable below. Why isn't this in the model object? What advantages or disadvantages are there to having it here instead of as part of the View object?
const imgBasePath = '//byui-cit.github.io/cit261/examples/';

class HikesView {
  renderHikeList(hikeListElement, hikeList) {
 // loop through our list of hikes building out the appropriate HTML for each and append it to the listElement.
    hikeListElement.innerHTML = '';
    hikeList.forEach(hike => {
      hikeListElement.appendChild(this.renderOneHikeLight(hike));
    });
  }
  // this method will be used to create the list of hikes with less detail: name, image, distance, difficulty.
  renderOneHikeLight(hike) {
    const item = document.createElement('li');
    item.classList.add('light');

    item.setAttribute('data-name', hike.name);
    item.innerHTML = ` <h2>${hike.name}</h2>
    <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${
      hike.imgAlt
    }"></div>
    <div>
            <div>
                <h3>Distance</h3>
                <p>${hike.distance}</p>
            </div>
            <div>
                <h3>Difficulty</h3>
                <p>${hike.difficulty}</p>
            </div>
    </div>`;

    return item;
  }
  // this method will be used to one hike with full detail...you will need this for the stretch goal!
  renderOneHikeFull(parent, hike) {
    const backButton = document.createElement('button');
    backButton.innerHTML = '&lt;- All Hikes';
    const item = document.createElement('li');
    item.innerHTML = `
            <img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}">
            <h2>${hike.name}</h2>
            <div>
                <h3>Distance</h3>
                <p>${hike.distance}</p>
            </div>
            <div>
                <h3>Difficulty</h3>
                <p>${hike.difficulty}</p>
            </div>
            <div>
                <h3>Description</h3>
                <p>${hike.description}</p>
            </div>
            <div>
                <h3>How to get there</h3>
                <p>${hike.directions}</p>
            </div>
        
        `;
    parent.innerHTML = '';
    item.insertBefore(backButton, item.childNodes[0]);
    parent.appendChild(item);

    return backButton;
  }
}
export default HikesView;

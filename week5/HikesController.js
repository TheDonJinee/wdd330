'use strict';

import HikeModel from "./hikeModel.js";
import HikesView from "./hikesView.js";

 // hike controller
export default class HikesController {
  // a class constructor
  constructor(parentId) {
    this.parentElement = document.getElementById(parentId);
    this.hikeModel = new HikeModel();
    this.hikesView = new HikesView(parentId);
  }
  showHikeList() {
    //  this will get called each time we need to display our full hike list. It should grab the list of hikes from the Model, and then send them to the view.
    const hikeList = this.hikeModel.getAllHikes();
    this.hikesView.renderHikeList(this.parentElement, hikeList);
    this.addHikeListener();
  }
  showOneHike(hikeName) {
    // use this when you need to show just one hike...with full details.
    const hike = this.hikeModel.getHikeByName(hikeName);
    this.hikesView.renderOneHikeFull(
      this.parentElement,
      hike
    ).ontouchend = () => {
      this.showHikeList();
    };
  }
  addHikeListener() {
    // for the stretch you will need to attach a listener to each of the listed hikes to watch for a touchend. 
    const childrenArray = Array.from(this.parentElement.children);
    childrenArray.forEach(child => {
      child.addEventListener('touchend', e => {
        this.showOneHike(e.currentTarget.dataset.name);
      });
    });
  }
}

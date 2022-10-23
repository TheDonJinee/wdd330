'use strict';

import HikesController from "./hikesController.js";

let myHikesController = new HikesController('hikes');

document.addEventListener('DOMContentLoaded', () => {
  myHikesController.showHikeList();
});

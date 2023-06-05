import {render} from './framework/render.js';
import {mockInit, tripPoints} from './mock/point.js';
import FilterView from './view/filter-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import TripPointModel from './model/trip-point-model.js';

mockInit(5, 10);
const pageContainer = document.querySelector('.trip-events');
const siteFilterElement = document.querySelector('.trip-controls__filters');
const tripPointsModel = new TripPointModel(tripPoints);
const boardPresenter = new BoardPresenter({boardContainer: pageContainer, tripPointsModel});

render(new FilterView(), siteFilterElement);
boardPresenter.init();
//already done

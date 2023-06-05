import {render} from './framework/render.js';
import {mockInit} from './mock/utils.js';
import {offersByType} from './mock/const.js';
import BoardPresenter from './presenter/board-presenter.js';
import TripPointModel from './model/trip-point-model.js';
import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';
import FilterModel from './model/filter-model.js';
import FilterPresenter from './presenter/filter-presenter.js';
import NewTripPointButtonView from './view/new-trip-point-button-view.js';

const [tripPoints, destinations] = mockInit(5, 10);
const pageContainer = document.querySelector('.trip-events');
const siteFilterElement = document.querySelector('.trip-controls__filters');
const siteHeaderElement = document.querySelector('.trip-main');
const tripPointsModel = new TripPointModel(tripPoints);
const destinationsModel = new DestinationsModel(destinations);
const offersModel = new OffersModel(offersByType);
const filterModel = new FilterModel();

const boardPresenter = new BoardPresenter({boardContainer: pageContainer,
  tripPointsModel, destinationsModel, offersModel, filterModel, onNewTripPointDestroy: handleNewTripPointFormClose});

const filterPresenter = new FilterPresenter({
  filterContainer: siteFilterElement,
  filterModel,
  tripPointsModel
});

const newTripPointButtonComponent = new NewTripPointButtonView({
  onClick: handleNewTripPointButtonClick
});

function handleNewTripPointFormClose() {
  newTripPointButtonComponent.element.disabled = false;
}

function handleNewTripPointButtonClick() {
  boardPresenter.createTripPoint();
  newTripPointButtonComponent.element.disabled = true;
}

render(newTripPointButtonComponent, siteHeaderElement);
filterPresenter.init();
boardPresenter.init();

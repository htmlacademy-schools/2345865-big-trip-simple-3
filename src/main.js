import {render} from './render.js';
import FilterView from './view/filter-view.js';
import BoardPresenter from './presenter/board-presenter.js';

const main = document.querySelector('.page-body__page-main');
const page = main.querySelector('.trip-events');
const filter = document.querySelector('.trip-controls__filters');
const board = new BoardPresenter({boardContainer: page});

render(new FilterView(), filter);
board.init();

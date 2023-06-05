import {render, replace, remove} from '../framework/render.js';
import {FilterType, UpdateType} from '../const.js';
import FilterView from '../view/filter-view.js';

export default class FilterPresenter {
  #filterContainer = null;
  #filterModel = null;
  #tripPointsModel = null;

  #filterComponent = null;

  constructor({filterContainer, filterModel, tripPointsModel}) {
    this.#filterContainer = filterContainer;
    this.#filterModel = filterModel;
    this.#tripPointsModel = tripPointsModel;

    this.#tripPointsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  get filters() {
    return [
      {
        type: FilterType.EVERYTHING,
        name: 'EVERYTHING'
      },
      {
        type: FilterType.FUTURE,
        name: 'FUTURE'
      }
    ];
  }

  init() {
    const filters = this.filters;
    const prevFilterComponent = this.#filterComponent;

    this.#filterComponent = new FilterView({
      filters,
      currentFilterType: this.#filterModel.filter,
      onFilterTypeChange: this.#handleFilterTypeChange
    });

    if (!prevFilterComponent) {
      render(this.#filterComponent, this.#filterContainer);
      return;
    }

    replace(this.#filterComponent, prevFilterComponent);
    remove(prevFilterComponent);
  }

  #handleModelEvent = () => {
    this.init();
  };

  #handleFilterTypeChange = (filterType) => {
    if (this.#filterModel.filter === filterType) {
      return;
    }

    this.#filterModel.setFilter(UpdateType.MAJOR, filterType);
  };
}

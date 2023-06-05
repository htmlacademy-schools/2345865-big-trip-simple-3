import Observable from '../framework/observable';

export default class DestinationsModel extends Observable {
  #destinations = null;

  constructor (destinations) {
    super();
    this.#destinations = destinations;
  }


  get destinations() {
    return this.#destinations;
  }
}

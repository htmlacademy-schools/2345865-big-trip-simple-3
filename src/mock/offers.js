import {getRandomSliceFromItems} from '../utils/utils';
import {offersByType} from './const';

const getOffersByType = (type) => offersByType.find((offers) => offers.type === type).offers;

const getRandomOffersIdsByType = (type) => {
  const currentTypeRandomOffers = getRandomSliceFromItems(getOffersByType(type));
  return currentTypeRandomOffers.map((offer) => offer.id);
};

const getOfferById = (id, type) => (getOffersByType(type)
  .find((offer) => offer.id === id));


export {getRandomOffersIdsByType, getOfferById, getOffersByType };
